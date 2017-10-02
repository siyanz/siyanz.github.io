---
layout: page
title: List of read papers
permalink: /papers-read/
---

<div class="readingList">
  <table>
    <tbody>
      {% assign papers = site.data.readingList.papers | sort: 'date' %}
      {% for paper in papers reversed %}
        <tr class="post-meta ">
          <td class="data-spacer date"> {{ paper.date | date: '%b %-d, %Y' }} </td>
          <td> {{ paper.title }} </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>