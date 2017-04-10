---
layout: page-noheader
sharing: false
---

<style type="text/css">

@-webkit-keyframes pop-in {
  0%   { transform: scale(0); }
  20%   { transform: scale(0); }
  80%   { transform: scale(1.2); }
  90%   { transform: scale(0.9); }
  100%   { transform: scale(1); }
}

@-webkit-keyframes move-in {
  0%   { transform: translateY(-1em);
        opacity: 0; }
  30%   { transform: translateY(-1em);
        opacity: 0; }
  100%   { transform: translateY(0em);
        opacity: 1; }
}

    h1, h2 {
        margin-top: 3em;
        margin-bottom: 3em;
        text-align: center;
        /*-webkit-animation: move-in 5s;
        animation:         move-in 5s;*/
    }

    .webdesign {
    }

    .webdesign-container {
        width: 100%;
        height: 400px;
        border: 5px solid rgba(122,122,122,.2);
        box-sizing: border-box;
        border-width: 5px;
        position: relative;
        margin-bottom: 2em;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        transition: border 0.3s ease-in-out;
/*        -webkit-animation: pop-in .8s;
        animation:         pop-in .8s;
        animation-timing-function: ease-in;*/

    }
    .webdesign-container a {
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        margin: auto;
    }
    .webdesign-extra {
        opacity: 0;
        margin-bottom: -1em;
        background-color: rgba(255,255,255,.8);
        position: absolute;
        padding: 10px 10px;
        bottom: 0px;
        right: 0px;
        max-width: 280px;
        display: block;
        text-align: right;
        transition: all 0.3s ease-in-out;
    }
    @media (max-width: 500px) {
        .webdesign-extra {
            opacity: 1;
            margin-bottom: 0;
        }
    }
    .webdesign-container:hover {
        border-color: #FF670F;
    }
    .webdesign-container:hover .webdesign-extra {
      opacity: 1;
      margin-bottom: 0em;
    }
    .webdesign-title {
        font-weight: bolder;
    }
    .webdesign-desc {
        font-size: .9em;
        line-height: 1.2;
    }
    .contact {
        display: block;
        background-color: rgba(122,122,122,.2);
        max-width: 100%;
        text-align: center;
        padding: 3em 1em;
    }
</style>

## Webdesign-Portfolio von [Max Melzer](/ueber)

<div class="webdesign">

<div class="webdesign-container">
<a href="http://theologiestudierende.de" style="background-image:url(/webdesign/theologiestudierende.de.jpg)"></a>
<div class="webdesign-extra">
<div class="webdesign-title">theologiestudierende.de</div>
<div class="webdesign-desc">Ein theologisches Online-Magazin</div>
</div>
</div>

<div class="webdesign-container">
<a href="http://liturgiewissenschaft.de" style="background-image:url(/webdesign/liturgiewissenschaft.de.jpg)"></a>
<div class="webdesign-extra">
<div class="webdesign-title">liturgiewissenschaft.de</div>
<div class="webdesign-desc">Die Internetseite der katholisch-theologischen AKL</div>
</div>
</div>

<div class="webdesign-container">
<a href="http://sachsen-konvent.de" style="background-image:url(/webdesign/sachsen-konvent.de.jpg)"></a>
<div class="webdesign-extra">
<div class="webdesign-title">sachsen-konvent.de</div>
<div class="webdesign-desc">Die Internetseite des Konvents der sächsischen Theologiestudierenden</div>
</div>
</div>

<div class="webdesign-container">
<a href="http://christuskirche-leipzig-eutritzsch.de" style="background-image:url(/webdesign/christuskirche-leipzig-eutritzsch.de.jpg)"></a>
<div class="webdesign-extra">
<div class="webdesign-title">christuskirche-leipzig-eutritzsch.de</div>
<div class="webdesign-desc">Die Internetseite der Christuskirchgemeinde Leipzig</div>
</div>
</div>

<div class="webdesign-container">
<a href="http://devotionalium.com/mac" style="background-image:url(/webdesign/devotionalium.com.jpg)"></a>
<div class="webdesign-extra">
<div class="webdesign-title">devotionalium.com</div>
<div class="webdesign-desc">Das Showcase für Devotionalium für Mac</div>
</div>
</div>

</div>
<div style="clear:both"></div>


<div class="contact">Anfragen nehme ich gern entgegen unter <a href="mailto:max.melzer@moehrenzahn.de">max.melzer@moehrenzahn.de</a></div>

<script type="text/javascript">
sr.reveal('.webdesign-container, .contact, h2', { duration: 1000, viewFactor: 0.5}, 500);
</script>
