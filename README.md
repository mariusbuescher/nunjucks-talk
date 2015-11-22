# nunjucks-talk

> Nunjucks und der Nunjuckr: Wie wir statische Seiten mit Grunt generieren

## Agenda

- nunjuckr
  - einfaches Setup
  - Optionen
  - Callbacks
- nunjucks
  - Variablen
  - globale Variablen und Funktionen
  - Schleifen
  - `include`
  - `extends` und `block`
  - `import` und `macro`
    - `call` und `caller`
  - Filter
  - Extensions

## Nunjuckr

Der nunjuckr ist ein einfache grunt-Plugin, das aus nunjucks-Templates statisches HTML generiert.

### Optionen

- `data`
- `ext`
- `searchPaths`
- `tags`
- `contentDimensions`

### Callbacks

Callbacks werden auch im Options-Block angegeben.

- `setUp`
- `preprocessData`
- `prerpocessFilePath`

## Nunjucks

Nunjucks ist die Templating-Engine, für die der Nunjuckr ein grunt-Plugin zur Verügung stellt. Es ist ein JavaScript Port der Python baserten Templating Engine Jinja2. Nunjucks wurde von Mozilla entwickelt.

### Variablen

Variablen werden mit zwei geschweiften Klammern ausgegeben:

````html
<p>{{ text }}</p>
````

### Globale Variablen und Funktionen

Globale Variablen müssen zunächst in der Nunjucks-Environment registriert werden, können danach aber wie normale Variablen aufgerufen werden:

````javascript
env.addGlobal( 'globalVar', 'Ich bin global' );
````

````html
<p>{{ globalVar }}</p>
````

> Achtung: Globale Variablen werden wirklich global registriert! Sie sind in allen Nunjucks Environments verfügbar.

### Schleifen

Schleifen sind wichtig, wenn eine Menge von Daten durchgegangen werden muss, beispielsweise eine Tabelle.

````html
<table>
    <tbody>
        {% for item in data %}
        <tr>
            <td>{{ item.data }}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>
````

### Include

Mit dem `include`-Tag lassen sich Dateien laden und rendern:

````html
{% include 'to-include.njs' %}
````

### Extends und block

Mit den Tags `extends` und `block` lassen sich generelle Layouts erstellen.

Layout:

````html
<div>
{% block content %}
{% endblock %}
</div>
````

Seite:

````html
{% extends 'layout.njs' %}
{% block content %}
Das ersetzt den Block des Layouts.
{% endblock %}
````

### Import und macro

Mit dem Tag `macro` lassen sich kleine Template-Teile vorfertigen und zu Bibliotheken zusammenfügen.

Bibliothek:

````html
{% macro paragraph( text ) %}
<p>{{ text }}</p>
{% endmacro %}
````

Aufruf:

````html
{% import 'bibliothek.njs' as lib %}
{{ lib.paragraph( 'Lorem ipsum' ) }}
````

#### Call und caller

Nunjucks bietet die Möglichkeit Macros auch als Wrapper zu gestalten. Das kann einfach mit `call` und `caller` erreicht werden.

````html
{% macro wrapper() %}
<div class="wrap-me">
{{ caller() }}
</div>
{% endmacro %}

{% call wrapper() %}
<p>Inhalte!!!</p>
{% endcall %}
````

### Filter

Filter sind eine Möglichkeit Inhalte von variablen zu ändern. Es gibt einige eingebaute Filter, es können aber auch eigene registriert werden. Filter werden mit einem Pipe-Symbol (|) aufgerufen. Alternativ kann seit Nunjucks Version 2 auch ein `filter` Tag genutzt werden.

````javascript
env.addFilter( 'myFilter', function( content, optionA, optionB ) {
    // change content here with option

    // return changed content
    return content;
} );
````

````html
{{ variable | myFilter( 'a', 5 ) }}

<!-- Filter-Tag -->
{% filter myFilter( 'a', 5 ) %}
Inhalte
{% endfilter %}
````

