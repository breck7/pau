TEX_SOURCES = $(shell find . -name "*.tex")
BIB_SOURCES = $(shell find . -name "*.bib")

default: main.pdf

main.pdf: $(TEX_SOURCES) $(BIB_SOURCES)
	pdflatex main
	bibtex main
	pdflatex main
	pdflatex main
	@echo "main.pdf file generated"

clean:
	/bin/rm -f *.aux *.log *.toc  *.blg *.bbl *.lof
	touch main.tex

