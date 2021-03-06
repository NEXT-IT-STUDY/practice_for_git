# practice_for_git

## ๐ Pull Request๋ก ํ์์ ํด๋ณด์.

### Pull Request ๋ณด๋ด๊ธฐ
1. Repository ์ค๋ฅธ์ชฝ ์๋จ์ `fork`๋ฅผ ํด๋ฆญํ๋ค.
  - `fork`์ ์์ ์ Github์ `fork`ํ ๋์ผํ Repository๊ฐ ๋ณต์ฌ๊ฐ ๋ฉ๋๋ค.
2. ๋ณต์ฌ๋ Repository๋ฅผ `clone`ํ๋ค.

```bash
> git clone <fork๋ repository ์ฃผ์>

ex) git clone https://github.com/<๊ฐ์ธ Github๊ณ์ >/practice_for_git.git
```

3. `clone`ํ `fork`๋ ๋ก์ปฌ ํด๋๋ก ์ด๋ํ์ฌ ๊ณตํต(ํ์ฌ, ์ฌ๊ธฐ์  NEXT-IT) Repository๋ฅผ `upstream`์ ๋ณ๋ช์ผ๋ก ์๊ฒฉ ์ ์ฅ์์ ๋ฑ๋กํด์ค๋ค.

```bash
> git remote add upstream <PR์ ๋ณด๋ผ ์๊ฒฉ repository ์ฃผ์>

ex) git remote add upstream https://github.com/NEXT-IT-STUDY/practice_for_git.git
```

๋ค์๊ณผ ๊ฐ์ด ๋์ค๋์ง ํ์ธํด๋ณด๊ธฐ!

```bash
> git remote -v
origin  https://github.com/saseungmin/practice_for_git.git (fetch)
origin  https://github.com/saseungmin/practice_for_git.git (push)
upstream        https://github.com/NEXT-IT-STUDY/practice_for_git.git (fetch)
upstream        https://github.com/NEXT-IT-STUDY/practice_for_git.git (push)
```

4. ์์์ ๋ด์ฉ์ผ๋ก ๋ธ๋์น๋ฅผ ์์ฑํ๋ค.

```bash
> git switch -c <๋ธ๋์น ์ด๋ฆ> upstream/main

or

> git checkout -b <๋ธ๋์น ์ด๋ฆ> upstream/main
```

5. `upstream` ์๊ฒฉ ์ ์ฅ์ ์ต์  ์ํ๋ฅผ ๋ฐ์ํ๊ธฐ!
```bash
> git fetch upstream

> git rebase upstream/main
```

6. ์ํ๋ ์์ํ๊ธฐ!

7. ์ปค๋ฐํ๊ธฐ!

```bash
> git add .
> git commit
```

8. origin ์๊ฒฉ ์ ์ฅ์ ์์ํ ๋ธ๋์น pushํ๊ธฐ

```bash
> git push origin <๋ธ๋์น ์ด๋ฆ>
```

9. Github์์ ํด๋น Repository๋ฅผ ํ์ธํ๋ค! (๋ณดํต ์๋์ผ๋ก recently pushed branches๋ผ๊ณ  ํด์ ๋น๋๋ค!)
  - ์๋์ผ๋ก `push`๋ `branch`๋ฅผ `pull-request` ๋ฒํผ์ ํด๋ฆญํฉ๋๋ค.

10. ์ํ๋ ์ ๋ชฉ๊ณผ ๋ด์ฉ์ ์์ฑํ ๋ค `Create pull request` ๋ฒํผ์ ํด๋ฆญํ๋ค.
11. `upstream`(NEXT-IT-STUDY) Repository์ `pull requests` ๋ถ๋ถ์ ํ์ธํ๊ธฐ!

### ์์ ์์ 

1. ๋ง์ฝ ํด๋น ๋ธ๋์น์์ ์์์ ์์ ํ์ฌ `commit`์ ๋ค์ ํ  ์ ๊ฐ๋จํ๊ฒ `push`๋ง ํ๋ฉด `commit`(์์)์ด ๋ฐ๋๊ฒ์ ํ์ธํ  ์ ์๋ค.

```bash
> git commit
> git push origin <๋ธ๋์น ์ด๋ฆ>
```

### Merge๋ ๋ธ๋์น ์ ๋ฆฌํ๊ธฐ

1. `main` ๋ธ๋์น๋ก ์ด๋

```bash
> git switch main

or

> git checkout main
```

2. ์ต์  ์ฝ๋ ๋ฐ์ํ๊ธฐ!

```bash
> git fetch upstream
> git rebase upstream/main
```

3. ๋ธ๋์น ์ญ์ 

```bash
> git branch -d <๋ธ๋์น ์ด๋ฆ> // ์์ 
> git branch -D <๋ธ๋์น ์ด๋ฆ> // ๊ฐ์ 
```
