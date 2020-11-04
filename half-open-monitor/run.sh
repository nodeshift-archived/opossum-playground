#!/bin/bash

ab -n 10 -c 1 "http://localhost:3000/" > out.txt