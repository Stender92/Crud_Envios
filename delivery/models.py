import uuid
from django.db import models

# Create your models here.
class delivery(models.Model):
    id = models.CharField(primary_key=True, blank=False, max_length=100)
    item = models.CharField(blank=False, max_length=200)
    direction = models.CharField(blank=False, max_length=200)
    transportist = models.CharField(blank=False, max_length=200)

    def __str__(self):
        return self.id

