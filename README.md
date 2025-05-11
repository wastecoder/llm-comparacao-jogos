# Teste de Geração de Código com GitHub Copilot e LLMs

Este repositório contém um desafio prático realizado no bootcamp **Microsoft Azure Cloud Native** da DIO.
O objetivo do projeto foi explorar o uso do GitHub Copilot integrado ao VS Code para testar a capacidade de diferentes **LLMs (Large Language Models)** em gerar código a partir de prompts simples, focando em jogos web e APIs.


## :file_folder: Estrutura do Projeto

```bash
llm-comparacao-jogos/
├── Claude/                  # Jogo da cobrinha gerado pelo Claude 3.5
├── GPT-4.1-API-CEP/         # API de consulta de CEP com ViaCEP gerada pelo GPT-4.1
├── GPT-4.1/                 # Jogo da memória gerado pelo GPT-4.1
├── o3-mini/                 # Jogo de tempo de reação gerado pelo o3-mini
```


## :gear: Processo de Criação
Durante todo o processo, **não escrevi código manualmente**.
Meu foco foi apenas fornecer instruções em linguagem natural (prompts) aos modelos,
observando como cada LLM compreendia e executava a tarefa solicitada.

Os modelos testados foram:

### Claude 3.5
- **Tarefa:** Criar um jogo da cobrinha (Snake Game) usando HTML, CSS e JavaScript com canvas.
- **Resultado:** Em poucas tentativas, o Claude gerou uma versão funcional com boa lógica de movimentação da cobra, mas a estilização visual ficou bastante simples.
- **Impressão:** Criou algumas funções duplicadas ou não utilizadas, mas conseguiu corrigir os erros ao ser reorientado. Apesar desses deslizes, entregou um jogo funcional e respondeu bem aos ajustes solicitados.

### o3-mini
- **Tarefa:** Criar um jogo de tempo de reação, onde o jogador precisa clicar o mais rápido possível na tela ao trocar de cor aleatoriamente.
- **Resultado:** O HTML, CSS e JavaScript gerados funcionaram bem e entregaram um jogo jogável, mas o modelo teve dificuldades em aplicar uma estilização mais refinada até o final.
- **Impressão:** Algumas instruções simples não foram totalmente compreendidas de primeira, mas após explicações detalhadas sobre os erros, o modelo conseguiu ajustar o código corretamente.

### GPT-4.1
- **Tarefa 1:** Criar um jogo da memória com cartas usando HTML, CSS e JS.
- **Tarefa 2:** Criar uma API em Node.js com Express que consome a API do ViaCEP e retorna os dados do endereço.
- Resultado: Em ambos os casos, o GPT-4.1 apresentou soluções completas, organizadas e com código limpo. No caso da API, também gerou testes e colocou instruções de uso no `README.md` como solicitado.
- **Impressão:** Foi o modelo mais confiável e “profissional” entre os testados, disparado o melhor. Captou nuances do prompt e seguiu as restrições com precisão.

### Gemini 2.0
- **Tarefa:** Criar o jogo Flappy Bird usando apenas HTML, CSS e JavaScript.
- **Resultado:** Mesmo com prompts diretos, o Gemini insistiu em gerar projetos com múltiplos arquivos e estruturas desnecessariamente complexas, desrespeitando a limitação imposta de usar apenas HTML, CSS e JS puros.
- **Impressão:** O modelo tem boa capacidade técnica, mas apresenta dificuldades em seguir restrições simples do prompt. Não foi possível aproveitar o resultado como esperado.


## :bulb: Insights e Possibilidades

- **Geração de Código:** LLMs são excelentes para gerar esboços de código a partir de instruções em linguagem natural. Em tarefas repetitivas ou estruturadas (como jogos simples), o ganho de tempo é enorme.
- **Correção e Refatoração:** Modelos como o GPT-4.1 entenderam sugestões de melhoria e foram capazes de reestruturar o código mantendo a funcionalidade.
- **Documentação automática:** Alguns modelos foram capazes de gerar até README com instruções, endpoints, e exemplos de uso.
- **Economia de tempo:** Ideal para protótipos rápidos, estudos, testes de lógica ou geração de componentes específicos.


