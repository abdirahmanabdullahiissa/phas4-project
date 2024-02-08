from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from models import Book, Category, Author, db
from flask_restful import Resource, Api
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5555/"}})

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book_reviews.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

migrate = Migrate(app, db)
api = Api(app)
db.init_app(app)

@app.route('/')
def home():
    return 'BOOK-REVIEW'

class Books(Resource):
    def get(self):
        books = Book.query.all()
        book_dict = [book.serialize() for book in books]
        return jsonify(book_dict)

api.add_resource(Books, '/books')

class BooksById(Resource):
    def get(self, id):
        book = Book.query.get(id)
        if not book:
            return {'error': 'Book not found'}, 404
        return jsonify(book.serialize())

    def delete(self, id):
        book = Book.query.get(id)
        if not book:
            return{'error':'book id cannot be found'}, 404
        else:
            db.session.delete(book)
            db.session.commit()
            response=make_response(jsonify({"message":"Record deleted successfully"}), 200)
            return response

api.add_resource(BooksById, '/books/<int:id>')

class Categories(Resource):
    def get(self):
        categories = Category.query.all()
        category_dict = [category.serialize() for category in categories]
        return jsonify(category_dict)

api.add_resource(Categories, '/categories')

class CategoriesById(Resource):
    def get(self, id):
        category = Category.query.get(id)
        if not category:
            return {'error': 'Category not found'}, 404
        return jsonify(category.serialize())

    def patch(self, id):
        data = request.get_json()
        name = data['name']
        description = data['description']
        genre = data['genre']
        category = Category.query.get(id)
        if not category:
            return {'error': 'Category not found'}, 404
        else:
            category.name = name
            category.description = description
            category.genre = genre
            db.session.commit()

            response = make_response(jsonify(category.serialize()),200)
            return response

            # response=make_response(jsonify(category.serialize()),200)
            # return response

api.add_resource(CategoriesById, '/categories/<int:id>')

class Authors(Resource):
    def post(self):
        data = request.get_json()
        name = data["name"]
        nationality = data["nationality"]

        if not Author:
            return {"error":"Author cannot be found"},400
        
        new_data = Author(name=name, nationality=nationality)
        db.session.add(new_data)
        db.session.commit()
        response=make_response (jsonify(new_data.serialize()), 201)
        return response

api.add_resource(Authors, '/authors')

if __name__ == '__main__':
    app.run(port=5555)

   



   