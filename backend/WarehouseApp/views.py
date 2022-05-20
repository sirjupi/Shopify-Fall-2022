from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from WarehouseApp.models import Warehouse, Inventory
from WarehouseApp.Serializers import InventorySerializer, WarehouseSerializer


@csrf_exempt
def warehouseApi(request, id=0):
    if request.method == 'GET':
        warehouses = Warehouse.objects.all()
        warehouses_serializer = WarehouseSerializer(warehouses, many=True)
        return JsonResponse(warehouses_serializer.data, safe=False)

    elif request.method == 'POST':
        warehouses_data = JSONParser().parse(request)
        warehouses_serializer = WarehouseSerializer(data=warehouses_data)
        if warehouses_serializer.is_valid():
            warehouses_serializer.save()
            return JsonResponse("Added to the Warehouse Database", safe=False)
        return JsonResponse("Not added to Warehouse Database", safe=False)

    elif request.method == 'PUT':
        warehouses_data = JSONParser().parse(request)
        warehouse = Warehouse.objects.get(
            WarehouseID=warehouses_data['WarehouseID'])
        warehouses_serializer = WarehouseSerializer(
            warehouse, data=warehouses_data)
        if warehouses_serializer.is_valid():
            warehouses_serializer.save()
            return JsonResponse("Updated warehouse", safe=False)
        return JsonResponse("Failed to update", safe=False)

    elif request.method == 'DELETE':
        warehouse = Warehouse.objects.get(WarehouseID=id)
        warehouse.delete()
        return JsonResponse("Warehouse Deleted", safe = False)

##
@csrf_exempt

def inventoryApi(request, id=0):
    if request.method == 'GET':
        inventorys = Inventory.objects.all()
        inventorys_serializer = InventorySerializer(inventorys, many=True)
        return JsonResponse(inventorys_serializer.data, safe=False)

    elif request.method == 'POST':
        inventorys_data = JSONParser().parse(request)
        inventorys_serializer = InventorySerializer(data=inventorys_data)
        if inventorys_serializer.is_valid():
            inventorys_serializer.save()
            return JsonResponse("Added to the Inventory Database", safe=False)
        return JsonResponse("Not added to Inventory Database", safe=False)

    elif request.method == 'PUT':
        inventorys_data = JSONParser().parse(request)
        inventory = Inventory.objects.get(
            ItemID=inventorys_data['ItemID'])
        inventorys_serializer = InventorySerializer(
            inventory, data=inventorys_data)
        if inventorys_serializer.is_valid():
            inventorys_serializer.save()
            return JsonResponse("Updated inventory", safe=False)
        return JsonResponse("Failed to update", safe=False)

    elif request.method == 'DELETE':
        inventory = Inventory.objects.get(ItemID=id)
        inventory.delete()
        return JsonResponse("Item Deleted", safe = False)

