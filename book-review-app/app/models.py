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
    @validates('title')
    def validate_title(self, key, title):
        if not title:
            raise ValueError('Title cannot be empty')
        return title

class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'), nullable=False)

    author = db.relationship('Author', backref='categories')

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'description': self.description, 'genre':self.genre}
    @validates('name')
    def validate_name(self, key, name):
        if not name:
            raise ValueError('Name cannot be empty')
        return name

class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    nationality = db.Column(db.String(150), nullable=False)

    def serialize(self):
        return {'id': self.id, 'name': self.name, 'nationality': self.nationality}


    


        
