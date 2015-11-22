{% extends 'site/layouts/default.njs' %}
{% import 'pattern/list/lists.njs' as lists %}

{% block content %}

{% include 'pattern/site-header/site-header.njs' %}

<h2>Globale Funktion:</h2>
<p>{{ globalFunction() }}</p>

{{ lists.list( list ) }}
{% endblock %}
