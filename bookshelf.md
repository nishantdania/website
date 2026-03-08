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
      {% assign notes_links = book.links | where: 'type', 'notes' %}
      {% assign other_links = book.links | where_exp: 'link', 'link.type != "notes"' %}
      {% for link in notes_links %}
        <a href="{{ link.url }}" class="notes-link">[{{ link.type }}]</a>{% unless forloop.last and other_links.size == 0 %} {% endunless %}
      {% endfor %}
      {% for link in other_links %}
        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">[{{ link.type }}]</a>{% unless forloop.last %} {% endunless %}
      {% endfor %}
      </div>
      {% endif %}
    </li>
  {% endfor %}
</ul>
