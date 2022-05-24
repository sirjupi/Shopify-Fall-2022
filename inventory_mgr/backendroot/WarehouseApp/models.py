from django.db import models
from django.forms import CharField

# Create your models here.
 

class Warehouse(models.Model):
    WarehouseID = models.AutoField(primary_key=True)
    City = models.CharField(max_length=100)

class Inventory(models.Model):
    ItemID = models.AutoField(primary_key=True)
    ItemName = models.CharField(max_length=100)
    CityName = models.CharField(max_length=100)
    