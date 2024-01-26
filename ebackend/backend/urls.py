from .views import *
from django.urls import path

urlpatterns = [
    path('getcart/<str:pk>/', cart),
    path('addcart/', createCart),
    path('deletecartitem/<str:pk>/', deleteCartItem),
    path('placeorder/', order),
]