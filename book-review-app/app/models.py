from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
db=SQLAlchemy()

class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), unique=True, nullable=False)
    review = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'), nullable=False)
    image_url = db.Column(db.String(255))

    author = db.relationship('Author', backref='books')

    def serialize(self):
        return {'id': self.id, 'title': self.title, 'review': self.review, 'image_url': self.image_url}

class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'), nullable=False)

    author = db.relationship('Author', backref='categories')

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'description': self.description}

class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    nationality = db.Column(db.String(150), nullable=False)

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'nationality': self.nationality}


    


        
