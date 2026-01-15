import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

type State = { showTags: boolean; setShowTags: (v:boolean)=>void; grouping: boolean; setGrouping:(v:boolean)=>void; };
const Ctx = createContext<State|null>(null);

const KEY_TAGS = 'osm.sidebar.showTags';
const KEY_GROUPING = 'osm.sidebar.grouping';

const readBool = (k:string, d:boolean) => {
  if (typeof window === 'undefined') return d;
  const v = window.localStorage.getItem(k);
  return v === null ? d : v === '1';
};

export function SidebarFiltersProvider({children}:{children:React.ReactNode}) {
  const [showTags, setShowTags] = useState(()=>readBool(KEY_TAGS, true));
  const [grouping, setGrouping] = useState(()=>readBool(KEY_GROUPING, true));

  useEffect(()=>{ window.localStorage.setItem(KEY_TAGS, showTags?'1':'0'); }, [showTags]);
  useEffect(()=>{ window.localStorage.setItem(KEY_GROUPING, grouping?'1':'0'); }, [grouping]);

  const value = useMemo(()=>({showTags,setShowTags,grouping,setGrouping}), [showTags,grouping]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSidebarFilters() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useSidebarFilters must be used within SidebarFiltersProvider');
  return v;
}
