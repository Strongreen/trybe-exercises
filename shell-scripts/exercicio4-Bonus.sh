#!/bin/bash

#BONUS

# 4 - 

DIRETORIO=$1

EXTENSAO=$2

cd $DIRETORIO

TOTAL=$(ls *.$2)
DATA=$(date -d 'today' '+%Y-%m-%d')

for ITEM in $TOTAL
do
    echo "renomeiando arquivo $ITEM para $DATA-$ITEM"
    $(mv $ITEM "$DATA-$ITEM")
done