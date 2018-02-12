(() => {
  const main = () => {
    const tobdy = document.querySelector('#symbol-table > tbody')
    tobdy.innerHTML = toTable(symbolsStr)
  }

  const toTable = (str) => {
    str = str.replace(/^[\n\t\s]*/, '').replace(/[\n\t\s]*$/, '\n')
    let res = ''
    const lines = str.split(/\n+/)
    for (let line of lines){
      let tds = line.trim().split(/\t+/).map(x => `<td>${x}</td>`).join('')
      res += `<tr>${tds}</tr>\n`
    }
    return res
  }

  const symbolsStr = `
    # Greek
    \\alpha	α	\\Alpha	Α
    \\beta	β	\\Beta	Β
    \\gamma	γ	\\Gamma	Γ
    \\delta	δ	\\Delta	Δ
    \\epsilon	ϵ	\\Epsilon	Ε
    \\zeta	ζ	\\Zeta	Ζ
    \\eta	η	\\Eta	Η
    \\theta	θ	\\Theta	Θ
    \\kappa	κ	\\Kappa	Κ
    \\lambda	λ	\\Lambda	Λ
    \\mu	μ	\\Mu	Μ
    \\nu	ν	\\Nu	Ν
    \\xi	ξ	\\Xi	Ξ
    \\omicron	ο	\\Omicron	Ο
    \\pi	π	\\Pi	Π
    \\rho	ρ	\\Rho	Ρ
    \\sigma	σ	\\Sigma	Σ
    \\tau	τ	\\Tau	Τ
    \\upsilon	υ	\\Upsilon	Υ
    \\phi	ϕ	\\Phi	Φ
    \\chi	χ	\\Chi	Χ
    \\psi	ψ	\\Psi	Ψ
    \\omega	ω	\\Omega	Ω

    \\varepsilon	ε
    \\varkappa	ϰ
    \\varphi	φ
    \\varpi	ϖ
    \\varrho	ϱ
    \\varsigma	ς
    \\vartheta	ϑ

    # Relation
    \\neq	≠
    \\equiv	≡
    \\not\\equiv	≢
    \\leq	≤
    \\geq	≥
    \\leqq	≦
    \\geqq	≧
    \\lneqq	≨
    \\gneqq	≩
    \\leqslant	⩽
    \\geqslant	⩾
    \\ll	≪
    \\gg	≫
    \\nless	≮
    \\ngtr	≯
    \\nleq	≰
    \\ngeq	≱
    \\lessequivlnt	≲
    \\greaterequivlnt	≳
    \\prec	≺
    \\succ	≻
    \\preccurlyeq	≼
    \\succcurlyeq	≽
    \\precapprox	≾
    \\succapprox	≿
    \\nprec	⊀
    \\nsucc	⊁
    \\sim	∼
    \\not\\sim	≁
    \\simeq	≃
    \\not\\simeq	≄
    \\backsim	∽
    \\lazysinv	∾
    \\wr	≀

    \\cong	≅
    \\not\\cong	≇
    \\approx	≈
    \\not\\approx	≉
    \\approxeq	≊
    \\approxnotequal	≆
    \\tildetrpl	≋
    \\allequal	≌
    \\asymp	≍
    \\doteq	≐
    \\doteqdot	≑

    \\lneq	⪇
    \\gneq	⪈
    \\preceq	⪯
    \\succeq	⪰
    \\precneqq	⪵
    \\succneqq	⪶


    # Sets and Logic
    \\emptyset	∅
    \\in	∈
    \\notin	∉	\\not\\in	∉
    \\ni	∋
    \\not\\ni	∌
    \\subset	⊂
    \\subseteq	⊆
    \\not\\subset	⊄
    \\not\\subseteq	⊈
    \\supset	⊃
    \\supseteq	⊇
    \\not\\supset	⊅
    \\not\\supseteq	⊉
    \\subsetneq	⊊
    \\supsetneq	⊋
    \\exists	∃
    \\nexists	∄	\\not\\exists	∄
    \\forall	∀
    \\aleph	ℵ
    \\beth	ℶ
    \\neg	¬
    \\wedge	∧
    \\vee	∨
    \\veebar	⊻
    \\land	∧
    \\lor	∨
    \\top	⊤
    \\bot	⊥
    \\cup	∪
    \\cap	∩
    \\bigcup	⋃
    \\bigcap	⋂
    \\setminus	∖
    \\therefore	∴
    \\because	∵
    \\Box	□
    \\models	⊨
    \\vdash	⊢

    # Arrow
    \\rightarrow	→	\\Rightarrow	⇒
    \\leftarrow	←	\\Leftarrow	⇐
    \\uparrow	↑	\\Uparrow	⇑
    \\downarrow	↓	\\Downarrow	⇓
    \\nwarrow	↖	\\nearrow	↗
    \\searrow	↘	\\swarrow	↙
    \\mapsto	↦
    \\to	→
    \\leftrightarrow	↔	\\hookleftarrow	↩
    \\Leftrightarrow	⇔
    \\rightarrowtail	↣	\\leftarrowtail	↢
    \\twoheadrightarrow	↠	\\twoheadleftarrow	↞
    \\hookrightarrow	↪	\\hookleftarrow	↩
    \\rightsquigarrow	⇝
    \\rightleftharpoons	⇌	\\leftrightharpoons	⇋
    \\rightharpoonup	⇀	\\rightharpoondown	⇁

    # Analysis
    \\infty	∞
    \\nabla	∇
    \\partial	∂
    \\sum	∑
    \\prod	∏
    \\coprod	∐
    \\int	∫
    \\iint	∬
    \\iiint	∭
    \\iiiint	⨌
    \\oint	∮
    \\surfintegral	∯
    \\volintegral	∰
    \\Re	ℜ
    \\Im	ℑ
    \\wp	℘
    \\mp	∓

    \\langle	⟨
    \\rangle	⟩
    \\lfloor	⌊
    \\rfloor	⌋
    \\lceil	⌈
    \\rceil	⌉

    # Blackboard Bold
    \\mathbb{a}	𝕒	\\mathbb{A}	𝔸
    \\mathbb{b}	𝕓	\\mathbb{B}	𝔹
    \\mathbb{c}	𝕔	\\mathbb{C}	ℂ
    \\mathbb{d}	𝕕	\\mathbb{D}	𝔻
    \\mathbb{e}	𝕖	\\mathbb{E}	𝔼
    \\mathbb{f}	𝕗	\\mathbb{F}	𝔽
    \\mathbb{g}	𝕘	\\mathbb{G}	𝔾
    \\mathbb{h}	𝕙	\\mathbb{H}	ℍ
    \\mathbb{i}	𝕚	\\mathbb{I}	𝕀
    \\mathbb{j}	𝕛	\\mathbb{J}	𝕁
    \\mathbb{k}	𝕜	\\mathbb{K}	𝕂
    \\mathbb{l}	𝕝	\\mathbb{L}	𝕃
    \\mathbb{m}	𝕞	\\mathbb{M}	𝕄
    \\mathbb{n}	𝕟	\\mathbb{N}	ℕ
    \\mathbb{o}	𝕠	\\mathbb{O}	𝕆
    \\mathbb{p}	𝕡	\\mathbb{P}	ℙ
    \\mathbb{q}	𝕢	\\mathbb{Q}	ℚ
    \\mathbb{r}	𝕣	\\mathbb{R}	ℝ
    \\mathbb{s}	𝕤	\\mathbb{S}	𝕊
    \\mathbb{t}	𝕥	\\mathbb{T}	𝕋
    \\mathbb{u}	𝕦	\\mathbb{U}	𝕌
    \\mathbb{v}	𝕧	\\mathbb{V}	𝕍
    \\mathbb{x}	𝕩	\\mathbb{X}	𝕏
    \\mathbb{y}	𝕪	\\mathbb{Y}	𝕐
    \\mathbb{z}	𝕫	\\mathbb{Z}	ℤ

    \\mathbb{0}	𝟘
    \\mathbb{1}	𝟙
    \\mathbb{2}	𝟚
    \\mathbb{3}	𝟛
    \\mathbb{4}	𝟜
    \\mathbb{5}	𝟝
    \\mathbb{6}	𝟞
    \\mathbb{7}	𝟟
    \\mathbb{8}	𝟠
    \\mathbb{9}	𝟡
    \\mathfrak{a}	𝔞	\\mathfrak{A}	𝔄
    \\mathfrak{b}	𝔟	\\mathfrak{B}	𝔅
    \\mathfrak{c}	𝔠	\\mathfrak{C}	ℭ
    \\mathfrak{d}	𝔡	\\mathfrak{D}	𝔇
    \\mathfrak{e}	𝔢	\\mathfrak{E}	𝔈
    \\mathfrak{f}	𝔣	\\mathfrak{F}	𝔉
    \\mathfrak{g}	𝔤	\\mathfrak{G}	𝔊
    \\mathfrak{h}	𝔥	\\mathfrak{H}	ℌ
    \\mathfrak{i}	𝔦	\\mathfrak{I}	ℑ
    \\mathfrak{j}	𝔧	\\mathfrak{J}	𝔍
    \\mathfrak{k}	𝔨	\\mathfrak{K}	𝔎
    \\mathfrak{l}	𝔩	\\mathfrak{L}	𝔏
    \\mathfrak{m}	𝔪	\\mathfrak{M}	𝔐
    \\mathfrak{n}	𝔫	\\mathfrak{N}	𝔑
    \\mathfrak{o}	𝔬	\\mathfrak{O}	𝔒
    \\mathfrak{p}	𝔭	\\mathfrak{P}	𝔓
    \\mathfrak{q}	𝔮	\\mathfrak{Q}	𝔔
    \\mathfrak{r}	𝔯	\\mathfrak{R}	ℜ
    \\mathfrak{s}	𝔰	\\mathfrak{S}	𝔖
    \\mathfrak{t}	𝔱	\\mathfrak{T}	𝔗
    \\mathfrak{u}	𝔲	\\mathfrak{U}	𝔘
    \\mathfrak{v}	𝔳	\\mathfrak{V}	𝔙
    \\mathfrak{x}	𝔵	\\mathfrak{X}	𝔛
    \\mathfrak{y}	𝔶	\\mathfrak{Y}	𝔜
    \\mathfrak{z}	𝔷	\\mathfrak{Z}	ℨ

    # Misc
    \\mp	∓
    \\dotplus	∔
    \\bullet	∙
    \\cdot	⋅
    \\oplus	⊕
    \\ominus	⊖
    \\otimes	⊗
    \\oslash	⊘
    \\odot	⊙
    \\circ	∘
    \\surd	√
    \\propto	∝
    \\angle	∠
    \\measuredangle	∡
    \\sphericalangle	∢
    \\mid	∣
    \\nmid	∤	\\not\\mid	∤
    \\parallel	∥
    \\nparallel	∦	\\not\\parallel	∦
    \\flat	♭
    \\natural	♮
    \\sharp	♯
`

  main()
})()