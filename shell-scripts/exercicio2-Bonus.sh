#!/bin/bash

#BONUS

# 2


if [ -f $@ ]
then
    echo "$@ é um arquivo comum"
    
    elif [ -d $@ ]
    then
        echo "$@ é um diretório"
else
    echo "$@ é um tipo especial de arquivo"
fi
