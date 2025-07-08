# ScreenBuddy

ScreenBuddy es una aplicación de inteligencia artificial que recomienda películas basándose en las preferencias de otros usuarios con gustos similares. El proyecto combina teoría y práctica sobre sistemas de recomendación, aprendizaje automático y análisis de datos.



https://github.com/user-attachments/assets/4862f00e-46b4-4495-b9ea-f7e586c07df5



## Descripción

ScreenBuddy utiliza técnicas de filtrado colaborativo para analizar los gustos de los usuarios y sugerir películas que podrían interesarles. El sistema se apoya en el dataset MovieLens y emplea algoritmos de machine learning para encontrar similitudes entre usuarios y películas.

- **Parte teórica:** Consulta el archivo `Recomendaciones con machine learning.pdf` para una explicación detallada sobre los fundamentos de los sistemas de recomendación, tipos de filtrado, análisis de datos y conceptos de machine learning aplicados.
- **Parte práctica:** El desarrollo completo, desde la descarga y análisis de datos hasta la implementación del modelo y su despliegue, se encuentra en el notebook `ScreenBuddy.ipynb`.

## Características principales
- Análisis y preprocesamiento de datos de películas y ratings.
- Creación de una matriz de utilidad usuario-película.
- Implementación de un sistema de recomendación colaborativo basado en vecinos más cercanos (KNN).
- Helper para búsqueda flexible de títulos.
- Despliegue de un API con Flask y acceso remoto vía ngrok.

## Cómo usar
1. Abre y ejecuta el notebook `ScreenBuddy.ipynb` para seguir el flujo completo del proyecto.
2. Consulta el PDF para entender la teoría detrás de cada paso.
3. Puedes adaptar el código para usar tus propios datos o extender el sistema con nuevos algoritmos.

## Requisitos
- Python 3.8+
- Jupyter Notebook
- Paquetes: pandas, numpy, scikit-learn, matplotlib, seaborn, Flask, pyngrok, fuzzywuzzy

Recuerda setear la clave ngrok donde se solicita


## Autor
Rolando Andrade

---

Este proyecto es solo con fines educativos.
