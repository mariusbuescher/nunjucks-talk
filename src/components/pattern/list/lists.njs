{% macro list( list ) %}
<ul>
    {% for item in list %}
    {% call listItem() -%}{{ loop.index }}: {{ item }}{%- endcall %}
    {% endfor %}
</ul>
{% endmacro %}

{% macro listItem() -%}
    <li>{{ caller() }}</li>
{%- endmacro %}
