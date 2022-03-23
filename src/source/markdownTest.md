```markdown
## 标题2
### 标题3
#### 标题4
##### 标题5
```

## 标题2
### 标题3
#### 标题4
##### 标题5

---
文本样式

```markdown
**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~ ~划线~
> 引用文本
```

**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~  ~划线~
> 引用文本

---
列表样式：

```markdown
* 列表
* 列表
* 列表

- 列表
- 列表
- 列表
 
+ 列表
+ 列表
+ 列表
```

* 列表
* 列表
* 列表
- 列表
- 列表
- 列表
+ 列表
+ 列表
+ 列表

```markdown
- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务
```

- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

---
链接和图片：
[link-delicate](http://localhost:4000/delicate)

![测试-付款码](https://i.loli.net/2021/12/01/X1pkv9ShmeDWZ25.jpg)

---
内联代码块:`code`

代码块：

```js
var foo = 'bar';
```

```javascript
// An highlighted block
var foo = 'bar';
```

---
表格：

表格与上下文字需要隔一行。

| Column 1 | Column 2      |
|:--------:| -------------:|
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |

---

代码里的code颜色
> 常用于记录代码或文字的更替

```diff
+ this will be highlighted in green
- this will be highlighted in red
```

----
### 公式-MathJax

需要 front-matter 添加 `mathjax: true`

> 语法参考官网：[mathjax](https://www.mathjax.org/)

```text
直接在markdown文件中添加下面的语句即可，即包含在 $$ 内的文字会被解析为数学公式
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

有公式才加载MathJax，没有公式仍然加载js渲染公式，会影响页面加载速度。

## more

### emoji

#### People

> 参考 & 更多： [markdown emojis](https://github.com/markdown-templates/markdown-emojis)

|     All   |      The       |       Emojies    |
|:--------: |:--------------:| :--------------: |
|  :alien: `:alien:`  |  :smile: `:smile:` | :laughing: `:laughing:` |
| :blush: `:blush:`   |  :smiley: `:smiley:`  |  :relaxed: `:relaxed:`  |
|:smirk: `:smirk:` |:heart_eyes: `:heart_eyes:` |:kissing_heart: `:kissing_heart:`      |
|  :kissing_closed_eyes: `:kissing_closed_eyes:` | :flushed: `:flushed:`| :relieved: `:relieved:` |
| :satisfied: `:satisfied:`  |  :grin: `:grin:`  | :wink: `:wink:`|
| :stuck_out_tongue_winking_eye: `:stuck_out_tongue_winking_eye:` | :stuck_out_tongue_closed_eyes: `:stuck_out_tongue_closed_eyes:` | :grinning: `:grinning:` |
| :kissing: `:kissing:`  |  :kissing_smiling_eyes: `:kissing_smiling_eyes:` |:stuck_out_tongue: `:stuck_out_tongue:` |
| :sleeping: `:sleeping:` | :worried: `:worried:`|:frowning: `:frowning:` |
|:anguished: `:anguished:` | :open_mouth: `:open_mouth:`  | :grimacing: `:grimacing:` |
| :confused: `:confused:` |  :hushed: `:hushed:`  | :expressionless: `:expressionless:`|
| :unamused: `:unamused:` | :sweat_smile: `:sweat_smile:` |  :sweat: `:sweat:` |
| :disappointed_relieved: `:disappointed_relieved:`  | :weary: `:weary:` | :pensive: `:pensive:`|
| :disappointed: `:disappointed:`|  :confounded: `:confounded:`| :fearful: `:fearful:` |
| :cold_sweat: `:cold_sweat:` | :persevere: `:persevere:` | :cry: `:cry:`|
| :sob: `:sob:` |  :joy: `:joy:` | :astonished: `:astonished:` |
| :scream: `:scream:` | :neckbeard: `:neckbeard:` | :tired_face: `:tired_face:`  |
| :angry: `:angry:`| :rage: `:rage:` | :triumph: `:triumph:` |
| :sleepy: `:sleepy:` | :yum: `:yum:` | :mask: `:mask:` |
| :sunglasses: `:sunglasses:`  | :dizzy_face: `:dizzy_face:` | :imp: `:imp:`  |
| :smiling_imp: `:smiling_imp:` | :neutral_face: `:neutral_face:` | :no_mouth: `:no_mouth:` |
| :innocent: `:innocent:` | | |                                     |

#### Heart and special emojies

| Heart | and | special emojies  |
|:----: | :-------: | :-----: |
| :yellow_heart: `:yellow_heart:`| :black_heart: `:black_heart:`| :gift_heart: `:gift_heart` |
| :blue_heart: `:blue_heart:` | :purple_heart: `:purple_heart:`| :heart: `:heart:` |
| :green_heart: `:green_heart:` | :broken_heart: `:broken_heart:` |:heartbeat: `:heartbeat:`  |
| :heartpulse: `:heartpulse:` |:two_hearts: `:two_hearts:` |:revolving_hearts: `:revolving_hearts:` |
| :cupid: `:cupid:`  |  :sparkling_heart: `:sparkling_heart:` | :sparkles: `:sparkles:`  |
| :star: `:star:`  |  :star2: `:star2:`  |  :dizzy: `:dizzy:`  |
| :boom: `:boom:`| :collision: `:collision:`  | :anger: `:anger:` |
| :exclamation: `:exclamation:` |  :question: `:question:`  | :grey_exclamation: `:grey_exclamation:` |
| :grey_question: `:grey_question:` |   :zzz: `:zzz:`  |  :dash: `:dash:` |
|  :sweat_drops: `:sweat_drops:`  |  :notes: `:notes:` |  :musical_note: `:musical_note:`  |
|  :fire: `:fire:`  |  :hankey: `:hankey:`   |    :poop: `:poop:`    |

#### Pointers and signs

|                         :shit: `:shit:`                         |                           :+1: `:+1:`                           |           :thumbsup: `:thumbsup:`           |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-----------------------------------------: |
|                           :-1: `:-1:`                           |                   :thumbsdown: `:thumbsdown:`                   |            :ok_hand: `:ok_hand:`            |
|                        :punch: `:punch:`                        |                    :facepunch: `:facepunch:`                    |               :fist: `:fist:`               |
|                            :v: `:v:`                            |                         :wave: `:wave:`                         |               :hand: `:hand:`               |
|                  :raised_hand: `:raised_hand:`                  |                   :open_hands: `:open_hands:`                   |           :point_up: `:point_up:`           |
|                   :point_down: `:point_down:`                   |                   :point_left: `:point_left:`                   |        :point_right: `:point_right:`        |
|                 :raised_hands: `:raised_hands:`                 |                         :pray: `:pray:`                         |         :point_up_2: `:point_up_2:`         |
|                         :clap: `:clap:`                         |                       :muscle: `:muscle:`                       |              :metal: `:metal:`              |
|                           :fu: `:fu:`                           |                      :walking: `:walking:`                      |             :runner: `:runner:`             |
|                      :running: `:running:`                      |                       :couple: `:couple:`                       |             :family: `:family:`             |
|        :two_men_holding_hands: `:two_men_holding_hands:`        |      :two_women_holding_hands: `:two_women_holding_hands:`      |             :dancer: `:dancer:`             |
|                      :dancers: `:dancers:`                      |                     :ok_woman: `:ok_woman:`                     |            :no_good: `:no_good:`            |
|      :information_desk_person: `:information_desk_person:`      |                 :raising_hand: `:raising_hand:`                 |    :bride_with_veil: `:bride_with_veil:`    |
|     :person_with_pouting_face: `:person_with_pouting_face:`     |              :person_frowning: `:person_frowning:`              |                :bow: `:bow:`                |
|                   :couplekiss: `:couplekiss:`                   |            :couple_with_heart: `:couple_with_heart:`            |            :massage: `:massage:`            |
|                      :haircut: `:haircut:`                      |                    :nail_care: `:nail_care:`                    |                :boy: `:boy:`                |
|                         :girl: `:girl:`                         |                        :woman: `:woman:`                        |                :man: `:man:`                |
|                         :baby: `:baby:`                         |                  :older_woman: `:older_woman:`                  |          :older_man: `:older_man:`          |
|       :person_with_blond_hair: `:person_with_blond_hair:`       |          :man_with_gua_pi_mao: `:man_with_gua_pi_mao:`          |    :man_with_turban: `:man_with_turban:`    |
|          :construction_worker: `:construction_worker:`          |                          :cop: `:cop:`                          |              :angel: `:angel:`              |
|                     :princess: `:princess:`                     |                   :smiley_cat: `:smiley_cat:`                   |          :smile_cat: `:smile_cat:`          |
|               :heart_eyes_cat: `:heart_eyes_cat:`               |                  :kissing_cat: `:kissing_cat:`                  |          :smirk_cat: `:smirk_cat:`          |
|                   :scream_cat: `:scream_cat:`                   |              :crying_cat_face: `:crying_cat_face:`              |            :joy_cat: `:joy_cat:`            |
|                  :pouting_cat: `:pouting_cat:`                  |                :japanese_ogre: `:japanese_ogre:`                |    :japanese_goblin: `:japanese_goblin:`    |
|                  :see_no_evil: `:see_no_evil:`                  |                 :hear_no_evil: `:hear_no_evil:`                 |      :speak_no_evil: `:speak_no_evil:`      |
|                    :guardsman: `:guardsman:`                    |                        :skull: `:skull:`                        |               :feet: `:feet:`               |
|                         :lips: `:lips:`                         |                         :kiss: `:kiss:`                         |            :droplet: `:droplet:`            |
|                          :ear: `:ear:`                          |                         :eyes: `:eyes:`                         |               :nose: `:nose:`               |
|                       :tongue: `:tongue:`                       |                  :love_letter: `:love_letter:`                  | :bust_in_silhouette: `:bust_in_silhouette:` |
|          :busts_in_silhouette: `:busts_in_silhouette:`          |               :speech_balloon: `:speech_balloon:`               |    :thought_balloon: `:thought_balloon:`    |



#### Nature

|                        :sunny: `:sunny:`                        |             :umbrella: `:umbrella:`             |                       :cloud: `:cloud:`                       |
| :-------------------------------------------------------------: | :---------------------------------------------: | :-----------------------------------------------------------: |
|                    :snowflake: `:snowflake:`                    |              :snowman: `:snowman:`              |                         :zap: `:zap:`                         |
|                      :cyclone: `:cyclone:`                      |                :foggy: `:foggy:`                |                       :ocean: `:ocean:`                       |
|                          :cat: `:cat:`                          |                  :dog: `:dog:`                  |                       :mouse: `:mouse:`                       |
|                      :hamster: `:hamster:`                      |               :rabbit: `:rabbit:`               |                        :wolf: `:wolf:`                        |
|                         :frog: `:frog:`                         |                :tiger: `:tiger:`                |                       :koala: `:koala:`                       |
|                         :bear: `:bear:`                         |                  :pig: `:pig:`                  |                    :pig_nose: `:pig_nose:`                    |
|                          :cow: `:cow:`                          |                 :boar: `:boar:`                 |                 :monkey_face: `:monkey_face:`                 |
|                       :monkey: `:monkey:`                       |                :horse: `:horse:`                |                   :racehorse: `:racehorse:`                   |
|                        :camel: `:camel:`                        |                :sheep: `:sheep:`                |                    :elephant: `:elephant:`                    |
|                   :panda_face: `:panda_face:`                   |                :snake: `:snake:`                |                        :bird: `:bird:`                        |
|                   :baby_chick: `:baby_chick:`                   |        :hatched_chick: `:hatched_chick:`        |              :hatching_chick: `:hatching_chick:`              |
|                      :chicken: `:chicken:`                      |              :penguin: `:penguin:`              |                      :turtle: `:turtle:`                      |
|                          :bug: `:bug:`                          |             :honeybee: `:honeybee:`             |                         :ant: `:ant:`                         |
|                       :beetle: `:beetle:`                       |                :snail: `:snail:`                |                     :octopus: `:octopus:`                     |
|                :tropical_fish: `:tropical_fish:`                |                 :fish: `:fish:`                 |                       :whale: `:whale:`                       |
|                       :whale2: `:whale2:`                       |              :dolphin: `:dolphin:`              |                        :cow2: `:cow2:`                        |
|                          :ram: `:ram:`                          |                  :rat: `:rat:`                  |               :water_buffalo: `:water_buffalo:`               |
|                       :tiger2: `:tiger2:`                       |              :rabbit2: `:rabbit2:`              |                      :dragon: `:dragon:`                      |
|                         :goat: `:goat:`                         |              :rooster: `:rooster:`              |                        :dog2: `:dog2:`                        |
|                         :pig2: `:pig2:`                         |               :mouse2: `:mouse2:`               |                          :ox: `:ox:`                          |
|                  :dragon_face: `:dragon_face:`                  |             :blowfish: `:blowfish:`             |                   :crocodile: `:crocodile:`                   |
|              :dromedary_camel: `:dromedary_camel:`              |              :leopard: `:leopard:`              |                        :cat2: `:cat2:`                        |
|                       :poodle: `:poodle:`                       |           :paw_prints: `:paw_prints:`           |                     :bouquet: `:bouquet:`                     |
|               :cherry_blossom: `:cherry_blossom:`               |                :tulip: `:tulip:`                |            :four_leaf_clover: `:four_leaf_clover:`            |
|                         :rose: `:rose:`                         |            :sunflower: `:sunflower:`            |                    :hibiscus: `:hibiscus:`                    |
|                   :maple_leaf: `:maple_leaf:`                   |               :leaves: `:leaves:`               |                 :fallen_leaf: `:fallen_leaf:`                 |
|                         :herb: `:herb:`                         |             :mushroom: `:mushroom:`             |                      :cactus: `:cactus:`                      |
|                    :palm_tree: `:palm_tree:`                    |       :evergreen_tree: `:evergreen_tree:`       |              :deciduous_tree: `:deciduous_tree:`              |
|                     :chestnut: `:chestnut:`                     |             :seedling: `:seedling:`             |                     :blossom: `:blossom:`                     |
|                  :ear_of_rice: `:ear_of_rice:`                  |                :shell: `:shell:`                |        :globe_with_meridians: `:globe_with_meridians:`        |
|                :sun_with_face: `:sun_with_face:`                |  :full_moon_with_face: `:full_moon_with_face:`  |          :new_moon_with_face: `:new_moon_with_face:`          |
|                     :new_moon: `:new_moon:`                     | :waxing_crescent_moon: `:waxing_crescent_moon:` |          :first_quarter_moon: `:first_quarter_moon:`          |
|          :waxing_gibbous_moon: `:waxing_gibbous_moon:`          |            :full_moon: `:full_moon:`            |         :waning_gibbous_moon: `:waning_gibbous_moon:`         |
|            :last_quarter_moon: `:last_quarter_moon:`            | :waning_crescent_moon: `:waning_crescent_moon:` | :last_quarter_moon_with_face: `:last_quarter_moon_with_face:` |
| :first_quarter_moon_with_face: `:first_quarter_moon_with_face:` |                 :moon: `:moon:`                 |                :earth_africa: `:earth_africa:`                |
|               :earth_americas: `:earth_americas:`               |           :earth_asia: `:earth_asia:`           |                     :volcano: `:volcano:`                     |
|                    :milky_way: `:milky_way:`                    |         :partly_sunny: `:partly_sunny:`         |                     :octocat: `:octocat:`                     |


### 下标

H~2~O

### 上标

29^th^

### 脚注

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.
[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

### task-list

- [ ] an unchecked task list item
- [x] checked item

### 缩写

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.

### 自定义代码块

!1!

::: warning
*here be dragons*
:::


### 标记

==marked==
