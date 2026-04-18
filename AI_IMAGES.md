# Geração de Imagens por IA — MyClinic Odonto

Acompanhamento das imagens geradas por IA para o site. Ordem de geração, prompts e status de cada arquivo.

---

## Status geral

| # | Arquivo | Seção | Status |
|---|---------|-------|--------|
| 1 | `hero-background.jpg` | Hero (fundo principal) | ✅ Gerada (Imagen 4 Fast) |
| 2 | `hero-clinica.jpg` | Hero (foto clínica alternativa) | ✅ Gerada (Imagen 4 Fast) |
| 3 | `clinic-photo.jpeg` | Serviços — card All-on-4 | ✅ Gerada (Imagen 4 Fast) |
| 4 | `placeholder-a.jpeg` | Serviços — card Estética | ✅ Gerada (Imagen 4 Fast) |
| 5 | `placeholder-b.jpeg` | Serviços — card Invisalign | ✅ Gerada (Imagen 4 Fast) |
| 6 | `foto-clinica.jpeg` | Seção Sobre / Autoridade | ✅ Gerada (Imagen 4 Fast) |
| 7 | `ornament-top.png` | Ornamento canto superior (ServicesSection) | ✅ Gerada (Imagen 4 Fast) |
| 8 | `ornament-side.png` | Ornamento lateral (WhyUs / CTA) | ✅ Gerada (Imagen 4 Fast) |
| 9 | `ornament-circle.png` | Ornamento círculo (Testimonials) | ✅ Gerada (Imagen 4 Fast) |

---

## Prompts

### 1. `hero-background.jpg` — Fundo Hero

**Uso:** Background full-width da seção principal do site. Fica atrás de overlay escuro (opacity 55%).

```
A luxurious, high-end dental clinic interior photographed in a warm, sophisticated atmosphere.
Elegant waiting area or treatment room with subtle gold accents, soft warm lighting, marble surfaces,
and premium furniture. Muted tones of cream, beige and warm white. Bokeh background, cinematic depth
of field. No people, no text. Aspect ratio 16:9, ultra wide shot. --ar 16:9 --style raw --q 2
```

---

### 2. `hero-clinica.jpg` — Foto Clínica Alternativa

**Uso:** Variação do hero ou seção About.

```
Interior of a premium dental clinic in Brazil. Modern reception desk with warm ambient lighting,
gold metallic details, cream and ivory tones. Minimalist luxury aesthetic, no people, no text.
Shot with a wide-angle lens, soft shadows, professional architectural photography. --ar 16:9 --style raw
```

---

### 3. `clinic-photo.jpeg` — Card All-on-4

**Uso:** Thumbnail do card de serviço "Protocolo All-on-4". Dimensões exibidas: 683×600 crop para 100%×160px.

```
Close-up of a dental professional's hands in white gloves carefully placing a dental implant model
on a clean white surface. Warm studio lighting, shallow depth of field, bokeh background. Premium
medical aesthetic, no text, no faces. Square-ish composition. --ar 4:3 --style raw
```

---

### 4. `placeholder-a.jpeg` — Card Estética do Sorriso

**Uso:** Thumbnail do card "Estética do Sorriso".

```
Beautiful close-up of a perfect white smile, teeth whitening result. Warm, natural lighting.
Lips slightly parted showing bright even teeth. Elegant and clean aesthetic. No full face visible,
just the smile area. Soft focus background. --ar 4:3 --style raw
```

---

### 5. `placeholder-b.jpeg` — Card Invisalign

**Uso:** Thumbnail do card "Invisalign".

```
A clear dental aligner (Invisalign tray) held delicately by two fingers against a soft neutral
background. Warm beige or cream backdrop. Clean, minimal, clinical luxury feel. Macro photography,
sharp focus on the aligner, blurred background. No text, no branding. --ar 4:3 --style raw
```

---

### 6. `foto-clinica.jpeg` — Seção Sobre / Autoridade

**Uso:** Foto de ambiente da clínica para seção institucional.

```
Elegant dental clinic consultation room. Modern dental chair in center, warm ambient lighting,
plants, soft shadows, gold and ivory color palette. Luxury medical environment. No people, wide shot,
professional interior photography. --ar 3:4 --style raw
```

---

### 7. `ornament-top.png` — Ornamento Canto Superior

**Uso:** Decoração de canto no topo esquerdo da ServicesSection. Fundo transparente (PNG). Exibido com `opacity-10 saturate-0`.

```
Elegant botanical ornament illustration, Art Nouveau style, delicate floral and leaf motifs,
single corner decoration. Monochrome gold line art on transparent background. Thin graceful lines,
symmetrical top-left corner piece. PNG with transparent background. --ar 1:1 --style raw
```

---

### 8. `ornament-side.png` — Ornamento Lateral

**Uso:** Decoração lateral (direita/esquerda) em WhyUsSection e CTASection. Fundo transparente.

```
Elegant vertical botanical border illustration, Art Nouveau style. Tall slender floral branch with
leaves and subtle flowers. Monochrome gold line art on transparent background. Graceful and minimal,
suitable as a side decoration. PNG transparent background. --ar 1:3 --style raw
```

---

### 9. `ornament-circle.png` — Ornamento Círculo

**Uso:** Decoração circular na TestimonialsSection, canto superior direito. Fundo transparente.

```
Elegant circular ornament, thin line botanical wreath, Art Nouveau style. Delicate leaves and small
flowers forming a perfect circle. Monochrome gold line art on transparent background. Clean and minimal.
PNG transparent background. --ar 1:1 --style raw
```

---

## Instruções de entrega

1. Gere a imagem com o prompt acima (Midjourney, DALL·E, Ideogram, etc.)
2. Me envie a imagem aqui no chat
3. Eu confirmo e substituo o arquivo em `frontend/public/images/`
4. Atualizo o status para ✅ Concluído

---

## Observações técnicas

- Ornamentos (7, 8, 9): **precisam de fundo transparente (PNG)**. Se o gerador não suportar, remover o fundo depois (remove.bg).
- Fotos (1–6): JPEG, qualidade alta, mínimo 1200px de largura.
- O site usa paleta **cream / ouro / escuro** — imagens quentes e luxuosas combinam melhor.
