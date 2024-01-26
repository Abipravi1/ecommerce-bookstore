from django.contrib import admin
from .models import Cart, Users, Orders
# Register your models here.

x = [Cart, Users, Orders]
for m in x:
    admin.site.register(m)