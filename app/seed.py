from models import Book, Category, Author
from sqlalchemy import func
from random import choice as rc
from app import app, db
from faker import Faker

fake = Faker()

with app.app_context():
    # Clear existing data
    Book.query.delete()
    Category.query.delete()
    Author.query.delete()

    # Create authors
    authors = []
    for _ in range(10):
        author = Author(name=fake.name(), nationality=fake.country())
        db.session.add(author)
        authors.append(author)
    db.session.commit()

    # Create books for each author
    for author in authors:
        book = Book(title=fake.sentence(), review=fake.sentence(), author_id=author.id)
        db.session.add(book)
    db.session.commit()

    # Create categories for each author
    genres = ['fantasy', 'science fiction', 'horror', 'adventure', 'crime']
    for author in authors:
        category = Category(name=fake.word(), genre=rc(genres), description=fake.sentence(), author_id=author.id)
        db.session.add(category)
    db.session.commit()




    