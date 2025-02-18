import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar.tsx'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: string;
}

export function Post({ author, publishedAt, content}: PostProps){
    const [comments, setComments] = useState([
        'sexo'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        //const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Obrigatório');
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentTextEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>
                
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Comentário... </strong>

                <textarea 
                    required
                    onInvalid={handleNewCommentInvalid}
                    name="comment" 
                    placeholder='Comentário...'
                    value={newCommentText}
                    onChange={handleNewCommentChange} 
                />

                <footer>
                    <button type="submit" disabled={isNewCommentTextEmpty}>
                         Comentar 
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment  => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}