from rest_framework import serializers
from WarehouseApp.models import Warehouse, Inventory


class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = ('WarehouseID',
                  'City',
                  )


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('ItemID',
                  'ItemName',
                  'CityName',
                  )
