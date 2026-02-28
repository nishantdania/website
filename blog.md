---
layout: default
title: "Blog"
---

<header>
  <h2>Blog</h2>
</header>

<main>
  <ul>
    {% for post in site.posts %}
      <li>
        <article>
          <a href="{{ post.url }}">{{ post.title }}</a>
          <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
        </article>
      </li>
    {% endfor %}
  </ul>
</main>
