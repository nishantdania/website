---
layout: default
title: "Bookshelf"
---

<ul class="bookshelf-list">
  {% assign sorted_books = site.data.books | sort: 'title' %}
  {% for book in sorted_books %}
    <li>
      <strong>{{ book.title }}</strong> - {{ book.author }}
      {% if book.links %}
      <div>
      {% assign sorted_links = book.links | sort: 'type' %}
      {% for link in sorted_links %}
        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">[{{ link.type }}]</a>{% unless forloop.last %} {% endunless %}
      {% endfor %}
      </div>
      {% endif %}
    </li>
  {% endfor %}
</ul>
