// Author results for pagination
export interface AuthorResults {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
}

export interface Doc {
    key:              string;
    type:             string;
    name:             string;
    alternate_names?: string[];
    birth_date?:      string;
    top_work?:        string;
    work_count:       number;
    top_subjects?:    string[];
    _version_:        number;
}

// -------  Author Type  -------
export interface Author {
    key:             string;
    photos:          number[];
    entity_type:     string;
    type:            Type;
    links:           Link[];
    personal_name:   string;
    bio:             Bio;
    title:           string;
    name:            string;
    remote_ids:      RemoteIDS;
    fuller_name:     string;
    alternate_names: string[];
    source_records:  string[];
    wikipedia:       string;
    birth_date:      string;
    latest_revision: number;
    revision:        number;
    created:         Bio;
    last_modified:   Bio;
}

export interface Bio {
    type:  string;
    value: string;
}

export interface Link {
    title: string;
    url:   string;
    type:  Type;
}

export interface Type {
    key: string;
}

export interface RemoteIDS {
    wikidata:     string;
    isni:         string;
    goodreads:    string;
    viaf:         string;
    librarything: string;
    amazon:       string;
}

// -------  Author Storage Type  -------
export interface AuthorDB {
    id:                        number;
    name:                      string;
    email:                     string;
    github:                    string;
    twitter:                   string;
    location:                  string;
    lastest_article_published: string;
    created_at:                Date;
    updated_at:                Date;
}
