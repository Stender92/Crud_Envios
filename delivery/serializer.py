from rest_framework import serializers
from .models import delivery

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = delivery
        fields = '__all__'