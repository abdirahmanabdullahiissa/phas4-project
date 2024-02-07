
from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import Book,Category,Author,db
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

migrate = Migrate(app, db)
api=Api(app)
db.init_app(app)

@app.route('/')
def home():
    return 'BOOK-REVIEW'

class Books(Resource):
 def get(self):
    books = Book.query.all()
    book_dict=[book.serialize() for book in  books]
    response= make_response(jsonify(book_dict),200)
    return response
api.add_resource(Books,'/books')

class BooksById(Resource):
   def get(self,id):
      books= Book.query.get()
      if not books:
        return make_response(jsonify({'error': 'Book not found'}), 404)
      else :
        book_dict= books.serialize()
        response= make_response(jsonify(book_dict),200)
        return response
api.add_resource(BooksById, '/heroes/<int:id>')

class Category(Resource):
   def get(self):
      categories=Category.query.all()
      category_dict=[category.serialize for category in categories]
      response= make_response(jsonify(category_dict),200)
      return response
api.add_resource(Category, '/categories')

class CategoriesById(Resource):
   def get(self,id):
      categories=Category.query.get()
      if not categories:
         return make_response(jsonify({'error':'category not found'}),404)
      else:
         category_dict=categories.serialize()
         response=make_response(jsonify(category_dict),200)
         return response
   def patch(self,id):
     data= request.get_json()
     name=data.get('name')
     description=data.get('description')
     category_id = Category.query.get(id)
     if not category_id:
        return {'error':'id not found'}
     else:
        category_id.name=name
        category_id.description= description

        db.session.commit()
        response=make_response(jsonify(category_id.serialize()),201)
        return response
api.add_resource(CategoriesById,'/categories/<int:id>')



   