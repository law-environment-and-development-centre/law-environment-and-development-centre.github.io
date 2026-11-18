---
layout: page
title: Members
permalink: /members/
description: Academic members, associates, doctoral researchers and alumni of the SOAS Law, Environment and Development Centre.
---
{%- comment -%}
  Content comes from _data/members.yml. The "Academic members" group also shows
  each person's biography from _data/team.yml (matched by name).
{%- endcomment -%}
{% for g in site.data.members %}
<section class="wrap section members-group{% if forloop.first %} section--tight{% endif %}" aria-labelledby="group-{{ forloop.index }}">
  <h2 class="section__title" id="group-{{ forloop.index }}">{{ g.group }}</h2>

  {% if g.group == 'Academic members' %}
  <div class="leaders">
    {% for p in g.people %}
    {% assign bio = site.data.team | where: "name", p.name | first %}
    <article class="leader">
      {% if p.photo %}<img src="{% include src.html src=p.photo %}" alt="" loading="lazy">{% else %}<span class="member__nophoto" aria-hidden="true"></span>{% endif %}
      <div>
        <h3>{% if p.link %}<a href="{% include src.html src=p.link %}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
        {% if p.role %}<p class="member__role">{{ p.role }}</p>{% endif %}
        {% if bio %}<div class="leader__bio">{{ bio.bio | markdownify }}</div>{% elsif p.interests %}<p class="member__interests">{{ p.interests }}</p>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>

  {% elsif g.group == 'Alumni voices' %}
  <div class="voices">
    {% for p in g.people %}
    <figure class="voice">
      {% if p.photo %}<img src="{% include src.html src=p.photo %}" alt="" loading="lazy">{% else %}<span class="member__nophoto" aria-hidden="true"></span>{% endif %}
      <div>
        <figcaption>
          <h3>{{ p.name }}</h3>
          {% if p.role %}<p class="voice__role">{{ p.role }}</p>{% endif %}
        </figcaption>
        <blockquote>{{ p.text | markdownify }}</blockquote>
      </div>
    </figure>
    {% endfor %}
  </div>

  {% else %}
  <div class="directory">
    {% for p in g.people %}
    <article class="member">
      {% if p.photo %}<img src="{% include src.html src=p.photo %}" alt="" loading="lazy">{% else %}<span class="member__nophoto" aria-hidden="true"></span>{% endif %}
      <div>
        <h3>{% if p.link %}<a href="{% include src.html src=p.link %}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
        {% if p.role %}<p class="member__role">{{ p.role }}</p>{% endif %}
        {% if p.interests %}<p class="member__interests">{{ p.interests }}</p>{% endif %}
        {% if p.email %}<p class="member__email"><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  {% endif %}
</section>
{% endfor %}
