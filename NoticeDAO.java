package com.noticeboard.dao;

import com.noticeboard.model.Notice;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@Repository
public class NoticeDAO {

    private List<Notice> notices = new ArrayList<>();

    public List<Notice> getNotices() {
        return notices;
    }

    public void saveNotice(Notice notice) {
        notices.add(notice);
    }
}
