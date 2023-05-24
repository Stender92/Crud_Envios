from django.shortcuts import render
from rest_framework import viewsets
from .serializer import DeliverySerializer
from .models import delivery

# Create your views here.
class DelivView(viewsets.ModelViewSet):
    serializer_class = DeliverySerializer
    queryset = delivery.objects.all()