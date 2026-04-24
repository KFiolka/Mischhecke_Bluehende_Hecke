---
name: writing-clearly-and-concisely
description: Write with clarity and force. This skill covers what to do (Strunk) and what not to do (AI patterns).
---

# Writing Clearly and Concisely

## Overview
Write with clarity and force. This skill covers what to do (Strunk) and what not to do (AI patterns).

## When to Use This Skill
Use this skill whenever you write prose for humans:
- Documentation, README files, technical explanations
- Commit messages, pull request descriptions
- Error messages, UI copy, help text, comments
- Reports, summaries, or any explanation
- Editing to improve clarity
If you're writing sentences for a human to read, use this skill.

## Limited Context Strategy
When context is tight:
1. Write your draft using judgment
2. Dispatch a subagent with your draft and the relevant section file
3. Have the subagent copyedit and return the revision
Loading a single section (~1,000-4,500 tokens) instead of everything saves significant context.

## Elements of Style
William Strunk Jr.'s The Elements of Style (1918) teaches you to write clearly and cut ruthlessly.

### Rules
**Elementary Rules of Usage (Grammar/Punctuation):**
1. Form possessive singular by adding 's
2. Use comma after each term in series except last
3. Enclose parenthetic expressions between commas
4. Comma before conjunction introducing co-ordinate clause
5. Don't join independent clauses by comma
6. Don't break sentences in two
7. Participial phrase at beginning refers to grammatical subject

**Elementary Principles of Composition:**
1. One paragraph per topic
2. Begin paragraph with topic sentence
3. Use active voice
4. Put statements in positive form
5. Use definite, specific, concrete language
6. Omit needless words
7. Avoid succession of loose sentences
8. Express co-ordinate ideas in similar form
9. Keep related words together
10. Keep to one tense in summaries
11. Place emphatic words at end of sentence

### Most Important Principles (from "03-elementary-principles-of-composition.md")
Most tasks need the following key principles:
- **Active Voice**: "The clear, forcible writer uses the active voice."
- **Positive Form**: "Make definite assertions. Avoid tame, colorless, hesitancy-filled language."
- **Concrete Language**: "If those who have studied the art of writing are in accord on any one point, it is on this: the surest way to arouse and hold the attention of the reader is by being specific, definite, and concrete."
- **Omit Needless Words**: "Vigorous writing is concise. A sentence should contain no unnecessary words, a paragraph no unnecessary sentences, for the same reason that a drawing should have no unnecessary lines and a machine no unnecessary parts."

## AI Writing Patterns to Avoid
LLMs regress to statistical means, producing generic, puffy prose. Avoid:
- **Puffery**: pivotal, crucial, vital, testament, enduring legacy
- **Empty "-ing" phrases**: ensuring reliability, showcasing features, highlighting capabilities
- **Promotional adjectives**: groundbreaking, seamless, robust, cutting-edge
- **Overused AI vocabulary**: delve, leverage, multifaceted, foster, realm, tapestry
- **Formatting overuse**: excessive bullets, emoji decorations, bold on every other word
Be specific, not grandiose. Say what it actually does.

## Bottom Line
Writing for humans? Apply the rules from Elements of Style. Focus on clarity, conciseness, and avoiding obvious AI mannerisms.
