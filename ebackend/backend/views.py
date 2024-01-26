from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from .models import Cart, Users, Orders
from .serializers import CartSerializers, UsersSerializers, OrdersSerialiazers

@api_view(['GET'])
def cart(request, pk):
    data = Cart.objects.filter(email=pk)
    serializers = CartSerializers(data, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)
    
    
@api_view(['POST'])
def createCart(request):
    ser = CartSerializers(data=request.data)
    if ser.is_valid():
        ser.save()
        return Response(ser.data, status=status.HTTP_200_OK)
    else:
        return Response({'status':'Data Not Valid'}, status=status.HTTP_406_NOT_ACCEPTABLE)
    
@api_view(['DELETE'])
def deleteCartItem(request, pk):
    x = Cart.objects.get(id=pk)
    x.delete()
    return Response({'status':'Deleted'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def order(request):
    d = OrdersSerialiazers(data = request.data)
    if d.is_valid():
        d.save()
        return Response(data.data, status=status.HTTP_200_OK)
    else:
        return Response({'status':'Invalid Data'}, status=status.HTTP_406_NOT_ACCEPTABLE)