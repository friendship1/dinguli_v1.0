#!/bin/bash
ssconvert --export-type=Gnumeric_pdf:pdf_assistant --export-options="paper=A4" ../mktxt/menu0.xlsx menu0.pdf
ssconvert --export-type=Gnumeric_pdf:pdf_assistant ../mktxt/menu1.xlsx menu1.pdf
ssconvert --export-type=Gnumeric_pdf:pdf_assistant --export-options="paper=A4" ../mktxt/menu2.xlsx menu2.pdf

