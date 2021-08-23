# practice_for_git

## 👉 Pull Request로 협업을 해보자.

### Pull Request 보내기
1. Repository 오른쪽 상단에 `fork`를 클릭한다.
  - `fork`시 자신의 Github에 `fork`한 동일한 Repository가 복사가 됩니다.
2. 복사된 Repository를 `clone`한다.

```bash
> git clone <fork된 repository 주소>

ex) git clone https://github.com/<개인 Github계정>/practice_for_git.git
```

3. `clone`한 `fork`된 로컬 폴더로 이동하여 공통(회사, 여기선 NEXT-IT) Repository를 `upstream`의 별명으로 원격 저장소에 등록해준다.

```bash
> git remote add upstream <PR을 보낼 원격 repository 주소>

ex) git remote add upstream https://github.com/NEXT-IT-STUDY/practice_for_git.git
```

다음과 같이 나오는지 확인해보기!

```bash
> git remote -v
origin  https://github.com/saseungmin/practice_for_git.git (fetch)
origin  https://github.com/saseungmin/practice_for_git.git (push)
upstream        https://github.com/NEXT-IT-STUDY/practice_for_git.git (fetch)
upstream        https://github.com/NEXT-IT-STUDY/practice_for_git.git (push)
```

4. 작업의 내용으로 브랜치를 생성한다.

```bash
> git switch -c <브랜치 이름> upstream/main

or

> git checkout -b <브랜치 이름> upstream/main
```

5. `upstream` 원격 저장소 최신 상태를 반영하기!
```bash
> git fetch upstream

> git rebase upstream/main
```

6. 원하는 작업하기!

7. 커밋하기!

```bash
> git add .
> git commit
```

8. origin 원격 저장소 작업한 브랜치 push하기

```bash
> git push origin <브랜치 이름>
```

9. Github에서 해당 Repository를 확인한다! (보통 자동으로 recently pushed branches라고 해서 뜹니다!)
  - 자동으로 `push`된 `branch`를 `pull-request` 버튼을 클릭합니다.

10. 원하는 제목과 내용을 작성한 뒤 `Create pull request` 버튼을 클릭한다.
11. `upstream`(NEXT-IT-STUDY) Repository의 `pull requests` 부분을 확인하기!

### 작업 수정

1. 만약 해당 브랜치에서 작업을 수정하여 `commit`을 다시 할 시 간단하게 `push`만 하면 `commit`(작업)이 바뀐것을 확인할 수 있다.

```bash
> git commit
> git push origin <브랜치 이름>
```

### Merge된 브랜치 정리하기

1. `main` 브랜치로 이동

```bash
> git switch main

or

> git checkout main
```

2. 최신 코드 반영하기!

```bash
> git fetch upstream
> git rebase upstream/main
```

3. 브랜치 삭제

```bash
> git branch -d <브랜치 이름> // 안전
> git branch -D <브랜치 이름> // 강제
```
