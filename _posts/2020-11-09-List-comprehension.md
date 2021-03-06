---
layout: post
title: "പൈത്തണ്‍: ലിസ്റ്റ് കോംപ്രഹെന്‍ഷന്‍"
category: Python
prism: true
color: teal
theme_color: "#009688"
img: /static/img/python_snake.jpg
tags: 
- Python
- Intermediate
---

## ലിസ്റ്റ് കോംപ്രഹെന്‍ഷന്‍

**ലിസ്റ്റ് കോംപ്രഹെന്‍ഷന്‍ സാധാരണയായി നിലവിലുള്ള ഒരു ഡാറ്റാ സ്ട്രക്ചറില്‍ നിന്നും പുതിയ ഒരു ലിസ്റ്റ് നിര്‍മിക്കാനാണ് ഉപയോഗിക്കുന്നത്.** ലിസ്റ്റ് കോംപ്രഹെന്‍ഷന്‍റെ സിന്‍റാക്സ് ചുവടെ നല്കിയിരിക്കുന്നു:

```python
[expression for item in list <condition>]
```

സിന്‍റാക്സ് നോക്കിയാല്‍ നിങ്ങള്‍ക്ക് മനസ്സിലാകും ലിസ്റ്റ് കോംപ്രഹെന്‍ഷനില്‍ നടക്കുന്നത് പുറത്തുള്ള `empty` ആയ ലിസ്റ്റിലേക്ക് ഓരോ നിലവിലുള്ള ലിസ്റ്റിലെ ഓരോ ഐറ്റവും ഫോര്‍ ലൂപ്പ് ഉപയോഗിച്ച് കൂട്ടിച്ചേര്‍ത്തുകൊണ്ടിരിക്കുകയാണ്. ഇവിടെ സിന്‍റാക്സില്‍ `<condition>` എന്നുള്ളത് ആംഗിള്‍ ബ്രാക്കറ്റില്‍ (<>) നല്കിയിരിക്കുന്നത് `condition` എഴുതുക നിര്‍ബന്ധമുള്ള കാര്യം അല്ല എന്നതിനാലാണ് അഥവാ `condition` ഓപ്ഷനല്‍ ആയത്തിനാലാണ്.

### പ്രോഗ്രാം 1

ഉദാഹരണമായി നമുക്ക് ചുവടെ കാണുന്ന പോലെ ഒന്ന് മുതല്‍ പത്ത് വരെ നമ്പറുകള്‍ ഐറ്റം ആയിവരുന്ന ഒരു ലിസ്റ്റിലെ ഓരോ ഐറ്റത്തിന്‍റെയും സ്ക്വയര്‍(square) കണ്ടെത്തണമെന്ന് ഇരിക്കട്ടെ. ഇവിടെ `range` ഫങ്ഷന്‍റെ ആര്‍ഗ്യുമെന്‍റ് ആയ `stop` 11 ആണ്. `stop` എന്ന ആര്‍ഗ്യുമെന്‍റിന്‍റെ ലിമിറ്റ് 11 കൊടുക്കാന്‍ കാരണം, `stop` എന്ന ആര്‍ഗ്യുമെന്‍റ് `n` ആണെങ്കില്‍ `range`  ഫങ്ഷന്‍ `n-1` വരെയേ ശ്രേണി (sequence) ജനറേറ്റ് ചെയ്യൂ.

<pre class="line-numbers">
<code class="language-python">
num_list = list(range(11))
</code>
</pre>

ചുവടെ സിന്‍റാക്സിലെ `expression`-ന്‍റെ സ്ഥാനത്ത് നല്കിയിരിക്കുന്നത് `item ** 2` ആണ്. നമുക്ക് ലിസ്റ്റിലെ ഓരോ നമ്പറിന്‍റെയും സ്ക്വയര്‍ കാണുവാനായി ഈയൊരു ഉദാഹരണത്തില്‍ `condition` എഴുതേണ്ടുന്ന കാര്യമില്ല.

<pre class="line-numbers" data-start="2">
<code class="language-python">
square_list = [item ** 2 for item in num_list]
print(square_list)
</code>
</pre>

### പ്രോഗ്രാം 2

മറ്റൊരു ഉദാഹരണമായി നമുക്ക് ഒരു ലിസ്റ്റിലെ നമ്പറുകളില്‍ നിന്നും ഇരട്ട സംഖ്യകളും ഒറ്റ സംഖ്യ വേര്‍തിരിച്ച് മറ്റൊരു ലിസ്റ്റില്‍ സ്റ്റോര്‍ ചെയ്യണമെന്ന് ഇരിക്കട്ടെ. ഈയൊരു സാഹചര്യ്ത്തില്‍ നമുക്ക് ലിസ്റ്റ് കോംപ്രഹെന്‍ഷന്‍ എങ്ങനെ ഉപയോഗിക്കാം എന്ന് നോക്കാം.


കഴിഞ്ഞ ഉദാഹരത്തില്‍ നിന്നും വിഭിന്നമായി ഇവിടെ `range` ഫങ്ഷന് സ്റ്റാര്‍ട്ട് എന്ന ആര്‍ഗ്യൂമെന്‍റ് നാലികിയിട്ടുണ്ട്. അതിനാല്‍ തന്നെ ഇത്തവണ പൂജ്യത്തില്‍ നിന്നും ശ്രേണി ആരംഭിക്കുന്നതിന് പകരം 1-ല്‍ നിന്നും ശ്രേണി ആരംഭിക്കും. പൂജ്യം ഒറ്റ സംഖ്യയോ ഇരട്ട സംഖ്യയോ അല്ലാത്തതിനാലാണ് ഇവിടെ ഒന്നില്‍ നിന്നും ശ്രേണി ആരംഭിക്കാം എന്ന് കരുതിയത്.

<pre class="line-numbers">
<code class="language-python">
num_list = list(range(1, 11))
</code>
</pre>

ഇവിടെ നമുക്ക് `condition` ചെക്ക് ചെയ്യേണ്ടതുണ്ട്. പ്രോഗ്രാമ്മിലെ രണ്ടാമത്തെ ലൈനില്‍ എഴുതിയിരിക്കുന്ന `if item % 2 == 0` എന്നുള്ളതാണ് ഇവിടെ `condition`. അതായത് ഈ `if item % 2 == 0` എന്ന ഈ കണ്ടീഷനില്‍ എത്തിച്ചേരുന്ന സന്ദര്‍ഭങ്ങളില്‍ മാത്രമാണ് പുറത്തെ എംപ്റ്റി ലിസ്റ്റിലേക്ക് ഓരോ ഐറ്റവും കൂട്ടി ചേര്‍ക്കപ്പെടുകയുള്ളൂ. അതായത് ഈയൊരു പ്രോഗ്രാം എക്സിക്യൂട്ട് ചെയ്താല്‍ നമുക്ക് കിട്ടുക ഇരട്ട സംഖ്യകള്‍ ഉള്ള ലിസ്റ്റ് ആയിരിയ്ക്കും.

<pre class="line-numbers" data-start="2">
<code class="language-python">
even_list = [item for item in num_list if item % 2 == 0]
print(f"Even List: {even_list}")
</code>
</pre>
