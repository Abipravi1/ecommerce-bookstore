from django.db import models

# Create your models here.
class Cart(models.Model):
    email = models.CharField(max_length=100)
    book_name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    
class Users(models.Model):
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class Orders(models.Model):
    name = models.CharField(max_length=100, default="User")
    email = models.CharField(max_length=100, blank=True)
    card_id = models.CharField(max_length=100)
    total = models.CharField(max_length=100, blank=True)
    address = models.TextField(blank=False)
    contact = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    