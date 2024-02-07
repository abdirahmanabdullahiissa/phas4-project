from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
db=SQLAlchemy()

class Book(db.Model, SerializerMixin):
    __tablename__ = 'book'

    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(150),nullable=False)
    review=db.Column(db.Text,nullable=False)
    author=db.relationship('Author',backref='books')

    def serialize(self):
        return {'id': self.id, 'title': self.title, 'review': self.review}
    @validates('review')
    def validate_description(self, key, review):
        if len(review) < 40:
            raise ValueError("review must be at least 20 characters long")
        return review

class Category(db.Model, SerializerMixin):
    __tablename__= 'category'
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(150),nullable=False)
    description=db.Column(db.Text,nullable=False)
    author=db.relationship('Author',backref='categories')
    def serialize(self):
        return{'id':self.id, 'name':self.name, 'description':self.description}
    @validates('description')
    def validate_description(self,key,description):
        if len < 20:
            raise ValueError("description must be atleast 20 characters long")
        return description


class Author(db.Model, SerializerMixin):
    __tablename__= 'authors'

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(150),nullable=False)
    nationality=db.Column(db.String(150),nullable=False)

    def serialize(self):
        return{'id':self.id, 'name':self.name, 'nationality':self.nationality}
        
    @validates('nationality')
    def validate_nationality(self, key, nationality):
        if not self.nationality:
            raise ValueError('Nationality cannot be empty')
        return nationality
    


        
