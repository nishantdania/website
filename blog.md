---
layout: default
title: "Blog"
---

<ul>
  {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <div class="post-content">
        <a href="{{ post.url }}">{{ post.title }}</a>
        {% if post.tags %}
          {% for tag in post.tags %}
            <span class="post-tag">#{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
