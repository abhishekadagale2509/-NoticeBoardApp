package com.noticeboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.noticeboard.model.Notice;
import com.noticeboard.service.NoticeService;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @GetMapping
    public List<Notice> getNotices() {
        return noticeService.getAllNotices();
    }

    @PostMapping
    public void createNotice(@RequestBody Notice notice) {
        noticeService.createNotice(notice);
    }
}
