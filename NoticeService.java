package com.noticeboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.noticeboard.dao.NoticeDAO;
import com.noticeboard.model.Notice;

import java.util.List;

@Service
public class NoticeService {

    @Autowired
    private NoticeDAO noticeDAO;

    public List<Notice> getAllNotices() {
        return noticeDAO.getNotices();
    }

    public void createNotice(Notice notice) {
        noticeDAO.saveNotice(notice);
    }
}
