#!/bin/bash

# 6 - 

if [ -f $1 ]
then
    echo "$1 é um arquivo comum"
    
    elif [ -d $1 ]
    then
        echo "$1 é um diretório"
else
    echo "$1 é um tipo especial de arquivo"
fi

ls -l $1