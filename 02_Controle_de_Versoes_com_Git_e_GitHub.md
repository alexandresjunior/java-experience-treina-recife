# Controle de Versões com Git and GitHub

## Introdução

Bem-vindxs! Nesta aula, aprenderemos a usar o Git e o GitHub para nos ajudar no desenvolvimento de aplicações web.

## Git

* [Git](https://git-scm.com/) é uma ferramenta de linha de comando que nos ajudará no controle de versão de várias maneiras:
  * Permitindo-nos acompanhar as alterações que fazemos em nosso código, salvando *snapshots* de nosso código em um determinado momento.  
    </br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/83607914/185609775-dd02827b-1c4d-4c44-a376-33d38f41c4b5.png" alt="Changing File" width="75%" align="center"/>
    </div>
    </br>
  * Permitindo-nos sincronizar facilmente o código entre diferentes pessoas que trabalham no mesmo projeto, permitindo que várias pessoas extraiam informações e enviem informações para um repositório armazenado na web.    
    </br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/83607914/185609839-405ffc54-59df-4355-8e57-f34a7a7e76f9.png" alt="Multiple Users" width="75%" align="center"/>
    </div>
    </br>
  * Permitindo-nos fazer alterações e testar o código em uma *branch* diferente sem alterar nossa base de código principal e, em seguida, mesclar os dois.
  * Permitindo-nos reverter para versões anteriores do nosso código se percebermos que cometemos um erro.
* Nas explicações acima, usamos a palavra **repositório**, que ainda não explicamos. Um repositório Git é um local de arquivo onde armazenaremos todos os arquivos relacionados a um determinado projeto. Eles podem ser **remotos** (armazenados *online*) ou **locais** (armazenados em seu computador).

## GitHub

* [GitHub](https://www.github.com/) é um site que nos permite armazenar repositórios Git remotamente na web.
* Vamos começar criando um novo repositório online:
   1. Verifique se você tem uma conta do GitHub configurada. Se você ainda não tem uma, pode criar uma [aqui](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).
   2. Clique no **+** no canto superior direito e clique em "Novo repositório"
   3. Defina um nome para o repositório que descreva seu projeto
   4. (Opcional) Forneça uma descrição para seu repositório
   5. Escolha se o repositório deve ser público (visível para qualquer pessoa na web) ou privado (visível apenas para você e outras pessoas a quem você concede acesso especificamente)
   6. (Opcional) Decida se deseja adicionar um README, que é um arquivo que descreve seu novo repositório.
    </br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/83607914/185610289-deb4cdc3-f474-42af-805d-f1d7ca9fe2fa.png" alt="Create New Repository" align="center"/>
    </div>
    </br>
* Com o repositório criado, provavelmente vamos querer adicionar alguns arquivos a ele. Para fazer isso, pegaremos nosso repositório *remoto* recém-criado e criaremos uma cópia, ou "clone", dele como um repositório *local* em nosso computador.
   1. Certifique-se de ter o git instalado em seu computador digitando `git` no seu terminal. Se não estiver instalado, você pode baixá-lo [aqui](https://git-scm.com/downloads).
   2. Clique no botão verde “Clone or Download” na página do seu repositório e copie o URL que aparece. Se você não criou um README, este link aparecerá próximo ao topo da página na seção “Configuração Rápida”.  
      </br>
      <div align="center">
        <img src="https://user-images.githubusercontent.com/83607914/185610899-3b2bfa8a-53c4-4f2a-a529-5aedbde52726.png" alt="git clone" width="75%" align="center"/>
      </div>
      </br>
  3. No seu terminal, execute `git clone <repository url>`. Isso fará o download do repositório para o seu computador. Se você não criou um README, você receberá o aviso: `You appear to have cloned into an empty repository`. Isso é normal e não há necessidade de se preocupar com isso.   
      ```
      $ git clone https://github.com/alexandresjunior/git-samples.git
      Cloning into 'git-samples'...
      remote: Enumerating objects: 3, done.
      remote: Counting objects: 100% (3/3), done.
      remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
      Receiving objects: 100% (3/3), done. 
      ```
   4. Execute `ls`, que é um comando que lista todos os arquivos e pastas em seu diretório atual. Você deve ver o nome do repositório que acabou de clonar.
   5. Execute `cd <nome do repositório>` para mudar o diretório para essa pasta.
   6. Execute `touch <new file name>` para criar um novo arquivo nessa pasta. Agora você pode fazer edições nesse arquivo. Como alternativa, você pode abrir a pasta em seu editor de texto preferido e adicionar manualmente novos arquivos.
   7. Agora, para que o Git saiba que ele deve rastrear o novo arquivo que você criou, execute `git add <new file name>` para rastrear esse arquivo específico, ou `git add .` para rastrear todos os arquivos dentro desse diretório.   
      ```
      $ ls
      hello.html  README.md
      ```

## Commits

* Now, we’ll start to get into what Git can be really useful for. After making some changes to a file, we can *commit* those changes, taking a snapshot of the current state of our code. To do this, we run: `git commit -m "some message"` where the message describes the changes you just made.
* After this change, we can run `git status` to see how our code compares to the code on the remote repository.
* When we’re ready to publish our local commits to Github, we can run `git push`. Now, when we go to GitHub in our web browser, our changes will be reflected.
* If you’ve only changed existing files and not created new ones, instead of using `git add .` and then `git commit...`, we can condense this into one command: `git commit -am "some message"`. This command will commit all the changes that you made.
* Sometimes, the remote repository on GitHub will be more up to date than the local version. In this case, you want to first commit any changes, and then run `git pull` to pull any remote changes to your repository.

## Merge Conflicts
* One problem that can emerge when working with Git, especially when you’re collaborating with other people, is something called a **merge conflict**. A merge conflict occurs when two people attempt to change a file in ways that conflict with each other.
* This will typically occur when you either `git push` or `git pull`. When this happens, Git will automatically change the file into a format that clearly outlines what the conflict is. Here’s an example where the same line was added in two different ways:
  ```
  a = 1
  <<<<< HEAD
  b = 2
  =====
  b = 3
  >>>>> 56782736387980937883
  c = 3
  d = 4
  e = 5
  ```
* In the above example, you added the line `b = 2` and another person wrote `b = 3`, and now we must choose one of those to keep. The long number is a *hash* that represents the commit that is conflicting with your edits. Many text editors will also provide highlighting and simple options such as “accept current” or “accept incoming” that save you the time of deleting the added lines above.
* Another potentially useful git command is `git log`, which gives you a history of all of your commits on that repository.
  ```
  $ git log
  commit e37edec6d3ad39657aadd51284add976ec01797f (HEAD -> main)
  Author: Alexandre de Souza Jr <83607914+alexandresjunior@users.noreply.github.com>
  Date:   Fri Aug 19 08:55:30 2022 -0300

      Add message to hello.html file

  commit dae29e8c34095a7cbdb1067904b5bc242dad7f0c
  Author: Alexandre de Souza Jr <83607914+alexandresjunior@users.noreply.github.com>
  Date:   Fri Aug 19 08:55:05 2022 -0300

      Create hello.html file

  commit eb3260efc7c1477bec79f8756fcceb4ffe74d580 (origin/main, origin/HEAD)
  Author: Alexandre de Souza Jr <83607914+alexandresjunior@users.noreply.github.com>
  Date:   Fri Aug 19 08:40:45 2022 -0300

      Initial commit
  ```
* Potentially even more helpful, if you realize that you’ve made a mistake, you can revert back to a previous commit using the command `git reset` in one of two ways:
  * `git reset --hard <commit>` reverts your code to exactly how it was after the specified commit. To specify the commit, use the commit hash associated with a commit which can be found using git log as shown above.
  * `git reset --hard origin/master` reverts your code to the version currently stored online on Github.

## Branching
After you’ve been working on a project for some time, you may decide that you want to add an additional feature. At the moment, we may just commit changes to this new feature as shown in the graphic below:
    </br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/83607914/185611863-6247da99-e05c-47b4-94fd-9d2fd5119bd2.png" alt="No Branch" width="75%" align="center"/>
    </div>
    </br>
But this could become problematic if we then discover a bug in our original code, and want to revert back without changing the new feature. This is where branching can become really useful.
* Branching is a method of moving into a new direction when creating a new feature, and only combining this new feature with the main part of your code, or the main branch, once you’re finished. This workflow will look more like the below graphic:

<div align="center">
  <img src="https://user-images.githubusercontent.com/83607914/185612001-9afa3ae7-32e4-4319-b001-647e474ec37b.png" alt="Branch" width="75%" align="center"/>
</div>
</br>

* The branch you are currently looking at is determined by the `HEAD`, which points to one of the two branches. By default, the HEAD is pointed at the `master` branch, but we can check out other branches as well.
* Now, let’s get into how we actually implement branching in our git repositories:
  1. Run `git branch` to see which branch you’re currently working on, which will have an asterisk to the left of its name.
    ```
    $ git branch
    * main
    ```
  2. To make a new branch, we’ll run `git checkout -b <new branch name>`
    ```
    $ git checkout -b new_feature
    Switched to a new branch 'new_feature'
    ```
    ```
    $ git branch
      main
    * new_feature
    ```
  3. Switch between branches using the command `git checkout <branch name>` and commit any changes to each branch.
  4. When we’re ready to merge our two branches together, we’ll check out the branch we wish to keep (almost always the master branch) and then run the command `git merge <other branch name>`. This will be treated similarly to a push or pull, and merge conflicts may appear.

## More GitHub Features
There are some useful features specific to GitHub that can help when you’re working on a project:

* **Forking**: As a GitHub user, you have the ability to *fork* any repository that you have access to, which creates a copy of the repository that you are the owner of. We do this by clicking the “Fork” button in the top-right.
* **Pull Requests**: Once you’ve forked a repository and made some changes to your version, you may want to request that those changes be added to the main version of the repository. For example, if you wanted to add a new feature to Bootstrap, you could fork the repository, make some changes, and then submit a pull request. This pull request could then be evaluated and possibly accepted by the people who run the Bootsrap repository. This process of people making a few edits and then requesting that they be merged into a main repository is vital for what is known as *open source software*, or software that created by contributions from a number of developers.
* **GitHub Pages**: GitHub Pages is a simple way to publish a static site to the web. (We’ll learn later about static vs dynamic sites.) In order to do this:
  1. Create a new GitHub repository.
  2. Clone the repository and make changes locally, making sure to include an `index.html` file which will be the landing page for your website.
  3. Push those changes to GitHub.
  4. Navigate to the Settings page of your repository, scroll down to GitHub Pages, and choose the master branch in the dropdown menu.
  5. Scroll back down to the GitHub Pages part of the settings page, and after a few minutes, you should see a notification that “Your site is published at: …” including a URL where you can find your site!
