{% extends 'site/layouts/default.njs' %}

{% block content %}

{% include 'pattern/site-header/site-header.njs' %}

<h2>Globale Funktion:</h2>
<p>{{ globalFunction() }}</p>

<ul>
    {% for item in list %}
    <li>{{ loop.index }}: {{ item }}</li>
    {% endfor %}
</ul>
{% endblock %}
