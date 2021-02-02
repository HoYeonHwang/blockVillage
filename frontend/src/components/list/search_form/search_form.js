import React from 'react';
import styles from './search_form.module.css';

const SearchForm = ({ onChangeSearch, onChangeSearchType, onClickEnter, search }) => {
    return (<div>
        <select name="keywordType" className={styles.select} onChange={onChangeSearchType}>
            <option 
                className={styles.option}
                value="title">제목</option>
            <option 
                className={styles.option}
                value="user">만든 이</option>
        </select>
        
        <input
            className={styles.input}
            type="text"
            name="keyword"
            value={search.keyword}
            onChange={onChangeSearch}
            onKeyDown={onClickEnter}
            placeholder="검색어를 입력하세요."
        />
    </div>);
}

export default SearchForm;