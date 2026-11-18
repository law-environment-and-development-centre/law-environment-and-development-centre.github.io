---
layout: page
title: Events & Collaborations
permalink: /events/collaborations/
---

<section class="wrap collabs">
  {% for it in site.data.collaborations %}
  <article class="collab">
    <h2>{% if it.link %}<a href="{% include src.html src=it.link %}">{{ it.title }}</a>{% else %}{{ it.title }}{% endif %}</h2>
    {% if it.points %}<ul>{% for pt in it.points %}<li>{{ pt }}</li>{% endfor %}</ul>{% endif %}
  </article>
  {% endfor %}
</section>
