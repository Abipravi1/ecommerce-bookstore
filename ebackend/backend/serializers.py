from rest_framework import serializers
from .models import Cart, Users, Orders

class CartSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class UsersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class OrdersSerialiazers(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'