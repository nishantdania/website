---
layout: default
title: "Blog"
---

<ul>
  {% for post in site.posts %}
    <li>
      <article>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
          {{ post.date | date: "%Y-%m-%d" }}
        </time>
      </article>
    </li>
  {% endfor %}
</ul>
