{% extends 'site/layouts/default.njs' %}

{% block content %}
<h1>{{ title }}</h1>
<p>{{ content }}</p>

<h2>Globale Funktion:</h2>
<p>{{ globalFunction() }}</p>

<ul>
    {% for item in list %}
    <li>{{ loop.index }}: {{ item }}</li>
    {% endfor %}
</ul>
{% endblock %}
